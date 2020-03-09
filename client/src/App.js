import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import HikeBar from './components/HikeBar';
import Menu from './components/Menu';

const App = () => {
  const [userLocation, setUserLocation] = useState({ enabled: false, lat: 47.7511, lng: -120.7401, accuracy: 0 }); //defaults to washington coordinates
  const [windowDimensions, setWindowDimensions] = useState({height: window.innerHeight, width: window.innerWidth});

  //updates window size on resize
  window.onresize = () => {
    setWindowDimensions({height: window.innerHeight, width: window.innerWidth});
  }

  return (
   <div className="app" style={{height: windowDimensions.height}}>
    <HikeBar />
    <Map userLocation={userLocation} windowDimensions={windowDimensions} />
    <Menu />
  </div>
  );
}

export default App;
