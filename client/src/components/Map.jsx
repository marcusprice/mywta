import React, { useState, useEffect, useRef } from 'react';
import MarkerClusterer from '@google/markerclustererplus';
import hikeMarkerIcon from '../assets/icons/hike-marker.png';

const Map = (props) => {
  const [map, setMap] = useState(null); //this never really changes after it's set, but state is the best solution to maintain the map on rerender
  const userLocationMarkers = useRef([]); //array to store location markers
  const hikeMarkers = useRef([]); //array to store location markers
  const markerCluster = useRef(null); //array to store location markers
  const initialMapLoad = useRef(false); //used to determine if the map has loaded once already
  const initialLocationLoad = useRef(false); //used to determine if it's the first time pinning the user on the map
  const usersLocation = useRef({}); //users coordiantes

  //loads map after initial render (only runs once)
  useEffect(() => {
    //first adds the initMap method to the window object (called by google maps uri callback)
    window.initMap = () => {
      //initMap creates a google map after the google maps resources have been loaded
      const google = window.google;
      //intialize with WA coordinates
      const wa = { lat: 47.7511, lng: -120.7401 };
      usersLocation.current = wa;
      //turn off places of interest
      const myStyles = [{
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [
          { visibility: "off" }
        ]
      }];

      //the map
      const googleMap = new google.maps.Map(
        document.getElementById('map'), {
          disableDefaultUI: true,
          zoomControl: true,
          zoom: 6,
          center: wa,
          styles: myStyles
        }
      );

      //set the google map
      setMap(googleMap);

      //init map no longer needed
      delete window.initMap;
    }

    //add script tag to call google maps api
    let googleScript = document.createElement('script');
    googleScript.async = true;
    googleScript.defer = true;
    googleScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + '&callback=initMap';  //calls initMap onload
    document.getElementsByTagName('body')[0].appendChild(googleScript);
  }, []);

  //watches and updates user's location on map
  navigator.geolocation.watchPosition((position) => {
    if(map) {
      const google = window.google; //grab google resources from the window
      const userCoords = { lat: position.coords.latitude, lng: position.coords.longitude }; //user's coordinates
      let accuracy = position.coords.accuracy;  //user's accuracy

      //update component's global ref with the user's location
      usersLocation.current = userCoords;
      //empty array for the new location circles
      const locationCircles = [];

      //add inner location circle to locationCircles array
      locationCircles.push(new google.maps.Marker({
        clickable: false,
        cursor: 'pointer',
        position: userCoords,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#C8D6EC',
            fillOpacity: 0.7,
            scale: 12,
            strokeWeight: 0,
        },
        draggable: false,
        map: map
      }));

      //add outer location circle to locationCircles array
      locationCircles.push(new google.maps.Marker({
        clickable: false,
        cursor: 'pointer',
        position: userCoords,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#4285F4',
            fillOpacity: 1,
            scale: 6,
            strokeColor: 'white',
            strokeWeight: 2,
          },
          draggable: false,
          map: map
      }));

      //only make an accuracy range if the accuracy is reasonable (to avoid massive circle on map)
      if(accuracy < 1000) {
        //accuracy range
        locationCircles.push(new google.maps.Circle({
          map: map,
          center: userCoords,
          clickable: false,
          cursor: 'pointer',
          radius: accuracy,
          strokeColor: '1bb6ff',
          strokeOpacity: .4,
          fillColor: '61a0bf',
          fillOpacity: .4,
          strokeWeight: 1,
          zIndex: 1
        }));
      }

      //remove old markers if they are there
      if(userLocationMarkers.current.length > 0) {
        userLocationMarkers.current.forEach(marker => {
          marker.setMap(null);  //removes the marker from the map
          marker = null;  //sets the marker to null for cleanup
        });
      }

      //add the user's marker to the array
      userLocationMarkers.current = locationCircles;

      //center the map over the user if it's the first time loading
      if(!initialLocationLoad.current) {
        map.setCenter(userCoords);
        map.setZoom(14);
        initialLocationLoad.current = true;
      }
    }
  });

  //centers the user on the map when called
  const centerUser = () => {
    if(map) {
      map.panTo(usersLocation.current);
      if(window.innerWidth > 769 && props.contentWindowExpanded) {
        map.panBy(-326, 0);
      }
    }
  }

  //manages map center offset for desktop UI
  useEffect(() => {
    if(map && window.innerWidth > 769) {  //only run in desktop mode
      if(initialMapLoad.current) {  //only run if the map has loaded at least once
        if(props.contentWindowExpanded) {
          //if the content menu is expanded, offset map center by 326 pixels
          map.panBy(-326, 0);
        } else {
          //if the content menu is closes, offset again 326 (bringing it to original center)
          map.panBy(326, 0);
        }
      } else {
        initialMapLoad.current = true;  //map has loaded, set to true for next render
      }
    }
  }, [props.contentWindowExpanded, map]);

  //adds hike markers to map
  useEffect(() => {
    if(map) {
      const google = window.google; //grab google resources from the window
      //clean any old markers out
      if(hikeMarkers.current.length > 0) {
        hikeMarkers.current.forEach(marker => {
          marker.setMap(null);  //removes the marker from the map
          marker = null;  //sets the marker to null for cleanup
        });
        hikeMarkers.current = [];
      }

      if(props.hikes.length > 0) {
        props.hikes.forEach(hike => {

          let position = {
            lat: hike.latitude,
            lng: hike.longitude
          }

          let hikeMarker = new google.maps.Marker({
            position: position,
            map: map,
            icon: hikeMarkerIcon
          });

          hikeMarkers.current.push(hikeMarker);
        });
      }

      if(!markerCluster.current) {
        markerCluster.current = new MarkerClusterer(map, hikeMarkers.current);
      } else {
        markerCluster.current.clearMarkers();
        markerCluster.current.addMarkers(hikeMarkers.current);
      }
    }
  }, [props.hikes, map])

  //used to add an event listener to center user after the component mounts
  useEffect(() => {
    document.querySelector('.location').addEventListener('click', centerUser, true);

    return () => {
      //remove the event listener on unmount
      document.querySelector('.location').removeEventListener('click', centerUser, true);
    }
  })

  return(
    <div id="map" />
  )
}

export default Map;
