import React, { useState, useEffect } from 'react';
import './App.css';
import AppContainer from 'react-div-100vh';
import HikeBar from './components/HikeBar';
import Map from './components/Map';
import ContentWindow from './components/ContentWindow';
import Menu from './components/Menu';

const App = () => {
  const [contentWindowExpanded, setContentWindowExpanded] = useState(false);
  //const [userLocation, setUserLocation] = useState({ enabled: false, lat: 47.7511, lng: -120.7401, accuracy: 0 }); //defaults to washington coordinates
  const [view, setView] = useState('about');
  const [parameters, setParameters] = useState({
    distance: 50,
    lengthMin: 0,
    lengthMax: 20,
    elevationMin: 0,
    elevationMax: 5000,
    elevationGainMin: 0,
    elevationGainMax: 5000,
    minRating: 0,
    centralCascades: true,
    centralWashington: true,
    easternWashington: true,
    issaquahAlps: true,
    mountRainierArea: true,
    northCascades: true,
    olympicPeninsula: true,
    pugetSoundIslands: true,
    snoqualmieRegion: true,
    southCascades: true,
    southwestWashington: true,
    coast: false,
    rivers: false,
    lakes: false,
    waterfalls: false,
    oldGrowth: false,
    fallFoliage: false,
    wildflowersMeadows: false,
    mountainViews: false,
    summits: false,
    wildlife: false,
    ridgesPasses: false,
    establishedCampsites: false,
    discoverPass: true,
    northwestForestPass: true,
    kidFriendly: true,
    dogFriendly: true
  });

  useEffect(() => {
    console.log(parameters.distance);
  })

  return (
   <AppContainer className="app">

    <HikeBar />

    <Map contentWindowExpanded={contentWindowExpanded} />

    <ContentWindow
      view={view}
      contentWindowExpanded={contentWindowExpanded}
      parameters={parameters}
      setParameters={setParameters}
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
