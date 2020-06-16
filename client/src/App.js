import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AppContainer from 'react-div-100vh';
import HikeBar from './components/HikeBar';
import LoaderContainer from './components/LoaderContainer';
import Map from './components/Map';
import ContentWindow from './components/ContentWindow';
import Menu from './components/Menu';

const App = () => {
  const userLocation = useRef({lat: 47.7511, lng: -120.7401}); //defaults to washington coordinates
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [contentWindowExpanded, setContentWindowExpanded] = useState(false);
  const [hikes, setHikes] = useState([]);
  const [selectedHike, setSelectedHike] = useState(null);
  const [view, setView] = useState('about');
  const [displayLoader, setDisplayLoader] = useState(false);
  const [parameters, setParameters] = useState({
    distance: 5,
    lengthMin: 0,
    lengthMax: 50,
    elevationMin: 0,
    elevationMax: 10000,
    elevationGainMin: 0,
    elevationGainMax: 10000,
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
    nationalParkPass: true,
    northwestForestPass: true,
    oregonStateParksDayUse: true,
    snoParksPermit: true,
    kidFriendly: false,
    dogFriendly: false
  });

  useEffect(() => {
    if(locationEnabled) {
      searchHikes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationEnabled]);

  const updateLocation = locationData => {
    userLocation.current = {
      lat: locationData.coords.latitude, 
      lng: locationData.coords.longitude
    };

    if(!locationEnabled) {
      setLocationEnabled(true);
    }
  }

  const searchHikes = (e = null) => {

    if(e) {
      e.preventDefault();
    }

    setContentWindowExpanded(false);
    setDisplayLoader(true);

    const requestParameters = parameters;
    requestParameters.userLat = userLocation.current.lat;
    requestParameters.userLng = userLocation.current.lng;

    const route = (locationEnabled && parameters.distance !== '100') ? '/getHikesWithLocation?' : '/getHikes?';
    
    fetch(route + convertToURI(parameters), {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
      .then(response => response.json())
      .then(result => {
        setDisplayLoader(false);
        setHikes(result);
      })
  }


  const convertToURI = (obj) => {
    var str = '';
    for (var key in obj) {
      if (str !== '') {
          str += '&';
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  }

  const handleLoader = () => {
    let output;
    if(displayLoader) {
      output = <LoaderContainer />;
    } else {
      output = '';
    }
    return output;
  }

  return (
   <AppContainer className="app">

    <HikeBar
      selectedHike={selectedHike}
      setContentWindowExpanded={setContentWindowExpanded}
      setView={setView}
    />

    <Map
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      hikes={hikes}
      setSelectedHike={setSelectedHike}
      setView={setView}
      updateLocation={updateLocation}
    />

    { handleLoader() }

    <ContentWindow
      view={view}
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      setHikes={setHikes}
      selectedHike={selectedHike}
      parameters={parameters}
      setParameters={setParameters}
      searchHikes={searchHikes}
      locationEnabled={locationEnabled}
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
