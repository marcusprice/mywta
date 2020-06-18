import React, { useState, useRef, useEffect } from 'react';
import MarkerClusterer from '@google/markerclustererplus';
import hikeMarkerIcon from '../../assets/icons/hike-marker.png';
import './map.css';

const Map = props => {
  //props
  const { 
    contentWindowExpanded,      //if content window is expanded or not
    setContentWindowExpanded,   //function to open/close content window
    hikes,                      //an array of hike data
    setSelectedHike,            //function to set the selected hike
    setView,                    //funciton to set the content window view
    updateLocation              //function to update location coords in parent
  } = props;

  //state
  const [map, setMap] = useState(null);                    //the map
  const [userLocation, setUserLocation] = useState({});    //user's coordinates

  //refs
  const markerCluster = useRef(null);               //marker cluster utility
  const oms = useRef(null);                         //spiderfy overlapping markers
  const userLocationMarkers = useRef([]);           //array to store location markers
  const hikeMarkers = useRef([]);                   //array to store hike markers
  const initialMapLoad = useRef(false);             //used to determine if the map has loaded once already
  const initialLocationLoad = useRef(false);        //used to determine if it's the first time pinning the user on the map
  const contentWindowExpandedRef = useRef(false);

  //resolutions
  const laptopRes = 769;
  const desktopRes = 1800;

  //loads map after initial render (only runs once)
  useEffect(() => {
    //first add initMap method to the window object (called later by google maps uri callback)
    window.initMap = () => {
      //initMap creates a google map after the google maps resources have been loaded from the api
      const google = window.google;
      //intialize with WA coordinates
      const wa = { lat: 47.7511, lng: -120.7401 };
      //turn off places of interest and trasit data
      const styles = [{
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
          styles: styles
        }
      );

      //set the google map
      setMap(googleMap);

      //init map no longer needed
      delete window.initMap;
    }

    //add script tag to call google maps api
    const googleScript = document.createElement('script');
    googleScript.async = true;
    googleScript.defer = true;
    googleScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + '&callback=initMap';  //calls initMap onload
    document.getElementsByTagName('body')[0].appendChild(googleScript);

    //watch the user's location
    navigator.geolocation.watchPosition(position => {
      //update location in parent component
      updateLocation(position);

      //update location state in this component
      setUserLocation({
        enabled: true,
        lat: position.coords.latitude, 
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  //add user's location marker to the map
  useEffect(() => {
    if(userLocation.enabled && map) {
      const google = window.google; //grab google resources from the window
      const userCoords = { lat: userLocation.lat, lng: userLocation.lng }; //user's coordinates
      let accuracy = userLocation.accuracy;  //user's accuracy

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
  }, [map, userLocation]);


  //adds hike markers to map
  useEffect(() => {
    if(map) {

      //load oms limbrary
      loadOMS();
      //clear any old markers
      clearMarkers();

      if(hikes.length > 0) {
        addMarkers();
        markerCluster.current.repaint();

        if(hikes.length > 500) {
          //we need to filter the markers to only show those in bounds
          const bounds = getBounds();
          hideMarkers(bounds);

          map.addListener('idle', () => {
            const updatedBounds = getBounds();
            hideMarkers(updatedBounds);
          });
        }
      }

      if(markerCluster.current) {
        map.addListener('idle', () => {
          markerCluster.current.repaint();
        });
      }
    }

    //remove the event listener on unmount/before new hikes are loaded
    return (() => {
      if(map) {
        window.google.maps.event.clearListeners(map, 'idle');

        if(markerCluster.current) {
          markerCluster.current.clearMarkers();
          markerCluster.current = null;
        }
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hikes, map]);


  //manages map center offset for desktop UI
  useEffect(() => {
    contentWindowExpandedRef.current = contentWindowExpanded;
    if(map && window.innerWidth > laptopRes) {  //only run in desktop mode
      if(initialMapLoad.current) {  //only run if the map has loaded at least once
        if(contentWindowExpanded) {
          if(window.innerWidth < desktopRes) {
            map.panBy(-218, 0);
          } else {
            map.panBy(-326, 0);
          }
        } else {
          //if the content menu is closes, offset again 326 (bringing it to original center)
          if(window.innerWidth < desktopRes) {
            map.panBy(218, 0);
          } else {
            map.panBy(326, 0);
          }
        }
      } else {
        initialMapLoad.current = true;  //map has loaded, set to true for next render
      }
    }
  }, [map, contentWindowExpanded]);

  
  const addMarkers = (bounds = null) => {
    hikes.forEach(hike => {

      if(bounds) {  //only show hikes within bounds provided
        if(hike.latitude >= bounds.latMax || hike.latitude <= bounds.latMin || hike.longitude >= bounds.lngMax || hike.longitude <= bounds.lngMin) {
          //the marker is outside of the bounds so break from this iteration to skip the hike
          return;
        }
      }

      //get google resources
      const google = window.google;

      //create a new marker for the hike
      let hikeMarker = new google.maps.Marker({
        position: {lat: hike.latitude, lng: hike.longitude},
        map: map,
        icon: hikeMarkerIcon
      });

      //add an event listener to each hike for animation and display queue
      hikeMarker.addListener('spider_click', () => {
        setSelectedHike(hike);

        //removes other animations
        for(let i = 0; i < hikeMarkers.current.length; i++){
          hikeMarkers.current[i].setAnimation(-1);
        }

        map.panTo({lat: hike.latitude, lng: hike.longitude});

        if(window.innerWidth > laptopRes) {
          setContentWindowExpanded(true);
        }

        if(contentWindowExpandedRef.current && window.innerWidth > 769) {
          if(window.innerWidth < desktopRes) {
            map.panBy(-218, 0);
          } else {
            map.panBy(-326, 0);
          }
        }

        hikeMarker.setAnimation(google.maps.Animation.BOUNCE);

        //set content window to hike info
        setView('hike-info');
      });

      //add the marker to oms and the hikemarkers array
      oms.current.addMarker(hikeMarker);
      hikeMarkers.current.push(hikeMarker);
    });

    //manage marker clustering
    if(!markerCluster.current) {  //marker clustering hasn't been set up yet
      //instantiate markerclusterer and save it to current ref
      markerCluster.current = new MarkerClusterer(
        map,
        hikeMarkers.current,
        {
          zoomOnClick: true,
          maxZoom: 12
        }
      );
    } else {
      markerCluster.current.addMarkers(hikeMarkers.current);
    }

    markerCluster.current.fitMapToMarkers();
  }


  //clears markers from the map & markercluster
  const clearMarkers = () => {
    //clear cluster
    if(markerCluster.current) {
      markerCluster.current.clearMarkers();
    }

    //clean any old markers out before adding new set
    if(hikeMarkers.current.length > 0) {

      hikeMarkers.current.forEach(marker => {
        marker.setMap(null);  //removes the marker from the map
        marker = null;  //sets the marker to null for cleanup
      });

      hikeMarkers.current = []; //sets array to empty so null indexes don't appear in clusterer
    }
  }


  //hides markers out of bounds on the map
  const hideMarkers = bounds => {
    if(hikeMarkers.current.length > 0) {
      hikeMarkers.current.forEach(marker => {
        if(marker.getPosition().lat() <= bounds.latMax && marker.getPosition().lat() >= bounds.latMin && marker.getPosition().lng() <= bounds.lngMax && marker.getPosition().lng() >= bounds.lngMin) {
          marker.setVisible(true);
        } else {
          marker.setVisible(false);
        }
      });

      markerCluster.current.repaint();
    }
  }


  //gets a human readable object of the map's current bounds
  const getBounds = () => {
    //get the map bounds and create a readable format
    const temp = map.getBounds();
    // console.log(temp);
    const bounds = {
      latMin: temp.Ya.i,
      latMax: temp.Ya.j,
      lngMin: temp.Ua.i,
      lngMax: temp.Ua.j,
    }

    return bounds;
  }


  //loads overlapping marker spiderfier library
  const loadOMS = () => {
    if(!oms.current) {  //oms hasn't been set up yet
      //load oms
      const omsScript = document.createElement('script');
      omsScript.id= 'omsScript';
      omsScript.src = './js/oms.min.js';
      document.body.appendChild(omsScript)

      //create new instance of oms after resources have loaded
      omsScript.onload = () => {
        oms.current = new window.OverlappingMarkerSpiderfier(map, {
          markersWontMove: true,
          markersWontHide: true,
          basicFormatEvents: true,
          keepSpiderfied: true,
          nearbyDistance: 40,
          circleSpiralSwitchover: 6
        });
      }
    }
  }


  //centers the user on the map when called
  const centerUser = () => {
    if(map) {
      map.panTo({lat: userLocation.lat, lng: userLocation.lng});
      if(window.innerWidth > laptopRes && contentWindowExpanded) {
        if(window.innerWidth < 1400) {
          map.panBy(-218, 0);
        } else {
          map.panBy(-326, 0);
        }
      }
    }
  }


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