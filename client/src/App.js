import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import HikeBar from './components/HikeBar';
import Menu from './components/Menu';

const App = () => {
  const [userLocation, setUserLocation] = useState({ enabled: false, lat: 47.7511, lng: -120.7401, accuracy: 0 }); //defaults to washington coordinates
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  //updates window size on resize
  window.onresize = () => {
    setWindowHeight(window.innerHeight)
  }

  return (
    <div className="app">
      <HikeBar />
      <Map userLocation={userLocation} windowHeight={windowHeight} />
      <Menu />
    </div>
  );
}

export default App;
