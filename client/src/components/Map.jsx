import React, { useEffect } from 'react';

const Map = () => {

  //loads map after initial render (only runs once)
  useEffect(() => {
    //first add the initMap method to the window object (called by google maps uri callback)
    window.initMap = () => {
      //initMap calls the map logic after the google maps resources have been loaded
      mywtaMap(window.google);
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

  //mywta map logic
  const mywtaMap = (google) => {
    //washington coordinates
    var wa = { lat: 47.7511, lng: -120.7401 };
    //the map
    var map = new google.maps.Map(
      document.getElementById('map'), {
        disableDefaultUI: true,
        zoomControl: true,
        zoom: 6,
        center: wa,
      }
    );
  }

  return(
    <div id="map" />
  )
}

export default Map;
