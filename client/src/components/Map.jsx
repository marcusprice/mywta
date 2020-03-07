import React, { useEffect } from 'react';

const Map = () => {

  //loads map aftrer initial render (only runs once)
  useEffect(() => {
    //first add the initMap method to the window object
    window.initMap = () => {
      //initMap calls the map logic after the google maps resources have been loaded
      mywtaMap(window.google);
      //init map no longer needed
      delete window.initMap;
    }

    //add script tag to call google maps api
    let script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + '&callback=initMap';
    document.getElementsByTagName('body')[0].appendChild(script);
  }, []);

  //mywta map logic
  const mywtaMap = (google) => {
    //washington coordinates
    var wa = {lat: 47.7511, lng: -120.7401};
    //the map object
    var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom: 6,
          center: wa
        }
    );

    //a marker centered in washinton
    new google.maps.Marker({position: wa, map: map});
  }

  return(
    <div id="map" />
  )
}

export default Map;
