import React, { useState, useRef, useEffect } from 'react';
import MarkerClusterer from '@google/markerclustererplus';
import hikeMarkerIcon from '../../assets/icons/hike-marker.png';
import './map.css';

const Map = props => {

  //props
  const { 
    contentWindowExpanded,                                                      //if content window is expanded or not
    setContentWindowExpanded,                                                   //function to open/close content window
    hikes,                                                                      //an array of hike data
    setSelectedHike,                                                            //function to set the selected hike
    setView,                                                                    //funciton to set the content window view
    updateLocation,                                                             //function to update location coords in parent
    waCoords                                                                    //WA coordinates
  } = props;

  //state
  const [map, setMap] = useState(null);                                         //the map
  const [userLocation, setUserLocation] = useState({});                         //user's coordinates
  const [markerClustererLoaded, setMarkerClusterLoaded] = useState(false);      //state for mc library loaded
  const [omsLoaded, setOmsLoaded] = useState(false);                            //state for oms library loaded

  //refs
  const markerCluster = useRef(null);                                           //marker cluster utility
  const oms = useRef(null);                                                     //spiderfy overlapping markers utility
  const userLocationMarkers = useRef([]);                                       //array to store location markers
  const hikeMarkers = useRef([]);                                               //array to store hike markers
  const initialMapLoad = useRef(false);                                         //used to determine if the map has loaded once already
  const initialLocationLoad = useRef(false);                                    //used to determine if it's the first time pinning the user on the map
  const contentWindowExpandedRef = useRef(false);                               //used to to track the content window state within this component

  //vars
  const laptopRes = 769;                                                        //laptop breakpoint
  const desktopRes = 1800;                                                      //desktop breakpoint
  
  //map functions
  //determines if the user is in or around WA
  const isUserInWA = position => {
    //set output to true and set user coords
    let output = true;
    const userCoords = position.coords;

    //set the bounds what what is considered WA
    const bounds = {
      northBound: 50.1163,
      southBound: 44.0521,
      eastBound: -113.9940,
      westBound: -124.8234	
    };

    //test the position, if it is outside any of the bounds set output to false
    if(userCoords.latitude > bounds.northBound) output = false;
    if(userCoords.latitude < bounds.southBound) output = false;
    if(userCoords.longitude > bounds.eastBound) output = false;
    if(userCoords.longitude < bounds.westBound) output = false;

    return output;
  }

  //initializes the map and sets up geolocation to watch position
  const initializeMap = () => {
    //add initMap method to the window object (called later by google maps uri callback)
    window.initMap = () => {
      //initMap creates a google map after the google maps resources have been loaded from the api
      const google = window.google;
      //turn off places of interest and trasit data
      const mapPoiTransitStyles = [{
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

      //create the map
      const googleMap = new google.maps.Map(
        document.getElementById('map'), {
          disableDefaultUI: true,
          zoomControl: true,
          zoom: 6,
          center: waCoords,
          styles: mapPoiTransitStyles
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
      //check if user is in WA
      if(isUserInWA(position)) {
        //user is in WA
        //update location in parent component
        const locationData = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          enabled: true
        };

        updateLocation(locationData);

        //update location state in this component
        setUserLocation({
          enabled: true,
          lat: position.coords.latitude, 
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      } else {
        //user is not in WA
        const locationData = { enabled: false };
        updateLocation(locationData);
      }
    }, (error) => {      
      if(!userLocation.enabled) {
        //not able to get location data - send notification data to parent
        const locationData = { enabled: false };
        updateLocation(locationData);
      }
    });
  } //end initializeMap()

  const addUserMarkers = () => {
    const google = window.google; //grab google resources from the window
    let accuracy = userLocation.accuracy;  //user's accuracy

    //empty array for the new location circles
    const locationCircles = [];

    //add inner location circle to locationCircles array
    locationCircles.push(new google.maps.Marker({
      clickable: false,
      cursor: 'pointer',
      position: userLocation,
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
      position: userLocation,
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
        center: userLocation,
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
      map.setCenter(userLocation);
      map.setZoom(14);
      initialLocationLoad.current = true;
    }
  } //end addUserMarkers()

  //closes content window and updates ref
  const closeContentWindow = () => {
    setContentWindowExpanded(false);
    contentWindowExpandedRef.current = false;
  }

  //loads marker cluster utility
  const loadMarkerCluster = () => {
    //create new marker cluster
    markerCluster.current = new MarkerClusterer(
      map,
      hikeMarkers.current,
      {
        zoomOnClick: true,
        maxZoom: 12
      }
    );

    //close content window when user clicks on marker cluster
    markerCluster.current.addListener('click', () => {
      closeContentWindow();
    });

    setMarkerClusterLoaded(true);
  }

  //loads overlapping marker spiderfier utility
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

        setOmsLoaded(true);
      }
    }
  }

  //convert get google bounds to mywta bounds
  const getBounds = () => {
    //get the map bounds and create a readable format
    const retrievedBounds = map.getBounds();

    const bounds = {
      latMin: retrievedBounds.getSouthWest().lat(),
      latMax: retrievedBounds.getNorthEast().lat(),
      lngMin: retrievedBounds.getSouthWest().lng(),
      lngMax: retrievedBounds.getNorthEast().lng()
    }

    return bounds;
  }

  //orients the user by centering them on the map around the hike markers
  const orientUser = () => {
    //manage marker clustering
    markerCluster.current.addMarkers(hikeMarkers.current);
    if(userLocationMarkers.current.length > 0) {
      markerCluster.current.addMarker(userLocationMarkers.current[0]);
    }
  
    markerCluster.current.fitMapToMarkers();
    markerCluster.current.removeMarker(userLocationMarkers.current[0]);
  }

  //add markers to map
  const addMarkers = () => {
    hikes.forEach(hike => {
      //get google resources
      const google = window.google;

      //create a new marker for the hike
      let hikeMarker = new google.maps.Marker({
        position: {lat: hike.latitude, lng: hike.longitude},
        map: map,
        icon: hikeMarkerIcon
      });

      //add an event listener to each hike for animation and view in parent
      hikeMarker.addListener('spider_click', () => {
        setSelectedHike(hike);

        map.panTo({lat: hike.latitude, lng: hike.longitude});

        if(window.innerWidth > laptopRes) {
          setContentWindowExpanded(true);
        }

        if(contentWindowExpandedRef.current && window.innerWidth > laptopRes) {
          if(window.innerWidth < desktopRes) {
            map.panBy(-218, 0);
          } else {
            map.panBy(-326, 0);
          }
        }

        //remove other animations
        for(let i = 0; i < hikeMarkers.current.length; i++){
          hikeMarkers.current[i].setAnimation(-1);
        }

        //set bounce animation
        hikeMarker.setAnimation(google.maps.Animation.BOUNCE);

        //set content window to hike info
        setView('hike-info');
      });

      //add the marker to oms and the hikemarkers array
      oms.current.addMarker(hikeMarker);
      hikeMarkers.current.push(hikeMarker);
    });

    orientUser();
  } //end addMarkers()

  //removes markers from the map & markercluster
  const removeMarkers = () => {
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

  const addNewHikes = () => {
    //clear any old markers
    removeMarkers();

    if(hikes.length > 0) {
      addMarkers();
      markerCluster.current.repaint();

      if(hikes.length > 500) {
        //filter the markers to only show those in bounds
        const bounds = getBounds();
        hideMarkers(bounds);

        //add listener which fires every time the map is idle after movement
        map.addListener('idle', () => {
          const updatedBounds = getBounds();
          hideMarkers(updatedBounds);
        });
      }
    }

    //repaint map so the clusters are correct
    if(markerCluster.current) {
      map.addListener('idle', () => {
        markerCluster.current.repaint();
      });
    }
  }

  const handleMapOffset = () => {
    contentWindowExpandedRef.current = contentWindowExpanded;
    if(window.innerWidth > laptopRes) {  //only run in desktop mode
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
  }

  //centers the user on the map when called
  const centerUser = () => {
    if(map) {
      if(userLocation.enabled) {
        if(hikes.length > 0) {
          closeContentWindow();
          orientUser();
        } else {
          map.panTo({lat: userLocation.lat, lng: userLocation.lng});
        }
      } else {
        if(hikes.length > 0) {
          closeContentWindow();
          markerCluster.current.fitMapToMarkers();
        } else {
          map.panTo(waCoords);
          map.setZoom(6);
        }
      }

      if(window.innerWidth > laptopRes && contentWindowExpanded) {
        if(window.innerWidth < 1400) {
          map.panBy(-218, 0);
        } else {
          map.panBy(-326, 0);
        }
      }
    }
  }

  //map effects
  //loads map after initial render and watches user's poistion (only runs once)
  useEffect(() => {
    initializeMap();
  }, []);

  //loads libraries that are dependent on the map
  useEffect(() => {
    if(map) {
      loadMarkerCluster();
      loadOMS();
    }
  }, [map]);

  //add user's location marker to the map when userLocation is updated from watch position method
  useEffect(() => {
    if(userLocation.enabled && map) {
      addUserMarkers();
    }
  }, [map, userLocation.enabled]);

  //adds hike markers to map
  useEffect(() => {    
    if(map && markerClustererLoaded && omsLoaded) {
      addNewHikes();
    }

    //remove the event listener on unmount/before new hikes are loaded
    return (() => {
      if(map) {
        window.google.maps.event.clearListeners(map, 'idle');
        if(markerCluster.current) {
          markerCluster.current.clearMarkers();
        }
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, omsLoaded, markerClustererLoaded, hikes]);

  //manages map center offset for desktop UI
  useEffect(() => {
    if(map) {
      handleMapOffset();
    }
  }, [map, contentWindowExpanded]);

  //used to add an event listener to center user after the component mounts
  useEffect(() => {
    document.querySelector('.location').addEventListener('click', centerUser, true);

    return () => {
      //remove the event listener on unmount
      document.querySelector('.location').removeEventListener('click', centerUser, true);
    }
  });

  return(
    <div id="map" />
  )
}

export default Map;