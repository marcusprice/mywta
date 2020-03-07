import React, { useState, useEffect } from 'react';

const Map = (props) => {
  const [map, setMap] = useState(null); //this never really changes after it's set, but state is the best solution to maintain the map on rerender

  //loads map after initial render (only runs once)
  useEffect(() => {
    //first add the initMap method to the window object (called by google maps uri callback)
    window.initMap = () => {
      //initMap calls createGoogleMap after the google maps resources have been loaded
      createGoogleMap(window.google);
      //init map no longer needed
      delete window.initMap;
    }

    //add script tag to call google maps api
    let googleScript = document.createElement('script');
    googleScript.async = true;
    googleScript.defer = true;
    googleScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + '&callback=initMap';  //calls initMap onload
    document.getElementsByTagName('body')[0].appendChild(googleScript);

    //creates a google map and ads it to state
    const createGoogleMap = (google) => {
      //intialize with WA coordinates
      const wa = { lat: 47.7511, lng: -120.7401 };
      //the map
      const googleMap = new google.maps.Map(
        document.getElementById('map'), {
          disableDefaultUI: true,
          zoomControl: true,
          zoom: 14,
          center: wa,
        }
      );

      setMap(googleMap);
    }
  }, []);

  //update map when user location changes
  useEffect(() => {
    if(map && props.userLocation.enabled) {
      map.setCenter({ lat: props.userLocation.lat, lng: props.userLocation.lng })
    }
  }, [props.userLocation, map]);

  return(
    <div id="map" />
  )
}

export default Map;
