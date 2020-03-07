import React, { useState, useEffect, useRef } from 'react';

const Map = (props) => {
  const [map, setMap] = useState(null); //this never really changes after it's set, but state is the best solution to maintain the map on rerender
  const userLocationMarkers = useRef([]);
  const initialLoad = useRef(false);

  //loads map after initial render (only runs once)
  useEffect(() => {
    //first add the initMap method to the window object (called by google maps uri callback)
    window.initMap = () => {
      //initMap creates a google map after the google maps resources have been loaded
      const google = window.google;
      //intialize with WA coordinates
      const wa = { lat: 47.7511, lng: -120.7401 };

      //the map
      const googleMap = new google.maps.Map(
        document.getElementById('map'), {
          disableDefaultUI: true,
          zoomControl: true,
          zoom: 6,
          center: wa,
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

  //update map when user's location changes
  useEffect(() => {
    if(map && props.userLocation.enabled) { //only run if the user's location is enabled and the map has loaded
      const google = window.google;
      const userCoords = { lat: props.userLocation.lat, lng: props.userLocation.lng };
      let accuracy = props.userLocation.accuracy;
      const locationCircles = [];

      //inner location circle
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

      //outer location circle
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

      if(props.userLocation.accuracy < 1000) {
        //only make an accuracy range if the accuracy is reasonable (to avoid massive circle on map)
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
          marker.setMap(null);
          marker = null;
        });
      }

      //add the user's marker to the array
      userLocationMarkers.current = locationCircles;

      //center the map over the user if it's the first time loading
      if(!initialLoad.current) {
        map.setCenter(userCoords);
        map.setZoom(14);
        initialLoad.current = true;
      }
    }

  }, [props.userLocation, map]);


  return(
    <div id="map" />
  )
}

export default Map;
