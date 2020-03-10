import React, { useState } from 'react';
import './App.css';
import HikeBar from './components/HikeBar';
import Map from './components/Map';
import ContentWindow from './components/ContentWindow';
import Menu from './components/Menu';

const App = () => {
  const [contentWindowExpanded, setContentWindowExpanded] = useState(false);
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
    <ContentWindow contentWindowExpanded={contentWindowExpanded} windowDimensions={windowDimensions} />
    <Menu contentWindowExpanded={contentWindowExpanded} setContentWindowExpanded={setContentWindowExpanded} />
  </div>
  );
}

export default App;
