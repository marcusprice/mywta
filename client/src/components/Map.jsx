import React, { useEffect } from 'react';

const Map = () => {

  //loads map on initial load
  useEffect(() => {
    let googleMapsPromise;
    //manages loading google maps
    const getGoogleMapsPromise = () => {
      //only set promise in window object if it hasn't been declared
      if(!googleMapsPromise) {
        googleMapsPromise = new Promise(resolve => {
          window.resolveGoogleMapsPromise = () => {
            resolve(window.google);

            delete window.resolveGoogleMapsPromise;
          }
        });

        let script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + '&callback=resolveGoogleMapsPromise';
        document.getElementsByTagName('body')[0].appendChild(script);
      }

      return googleMapsPromise;
    }

    getGoogleMapsPromise()
      .then(google => { mywtaMap(google) });

  }, []);

  const mywtaMap = (google) => {
    // The location of Uluru
    var seattle = {lat: 47.60624, lng: -122.3321};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom: 16,
          center: seattle
        }
    );

    // The marker, positioned in seattle
    new google.maps.Marker({position: seattle, map: map});
  }

  return(
    <div id="map" />
  )
}

export default Map;
