import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';

const App = () => {
  const [userLocation, setUserLocation] = useState({ enabled: false, lat: 47.7511, lng: -120.7401, accuracy: 0 }); //defaults to washington coordinates

  //gets user's position for the map & hike radius
  navigator.geolocation.watchPosition((position) => {
    setUserLocation({
      enabled: true,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy
    });
  });

  return (
    <Map userLocation={userLocation} />
  );
}

export default App;
