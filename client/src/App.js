import React, { useState } from 'react';
import './App.css';
import AppContainer from 'react-div-100vh';
import HikeBar from './components/HikeBar';
import Map from './components/Map';
import ContentWindow from './components/ContentWindow';
import Menu from './components/Menu';

const App = () => {
  const [contentWindowExpanded, setContentWindowExpanded] = useState(false);
  //const [userLocation, setUserLocation] = useState({ enabled: false, lat: 47.7511, lng: -120.7401, accuracy: 0 }); //defaults to washington coordinates
  const [hikes, setHikes] = useState([]);
  const [selectedHike, setSelectedHike] = useState(null);
  const [view, setView] = useState('about');

  return (
   <AppContainer className="app">

    <HikeBar
      selectedHike={selectedHike}
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      setView={setView}
    />

    <Map
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      hikes={hikes}
      setSelectedHike={setSelectedHike}
      setView={setView}
    />

    <ContentWindow
      view={view}
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      setHikes={setHikes}
      selectedHike={selectedHike}
    />

    <Menu
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      setView={setView}
      view={view}
    />

  </AppContainer>
  );
}

export default App;
