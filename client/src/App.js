import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AppContainer from 'react-div-100vh';
import HikeBar from './components/HikeBar/';
import LoaderContainer from './components/LoaderContainer/';
import Map from './components/Map/';
import ContentWindow from './components/ContentWindow/';
import Menu from './components/Menu/';

const App = () => {
  const userLocation = useRef({lat: 47.7511, lng: -120.7401}); //defaults to washington coordinates
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
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

  //searches for hikes when locationenabled is set to true
  useEffect(() => {
    if(locationChecked) {
      searchHikes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationChecked]);

  //function to update the user's location ref
  const updateLocation = locationData => {    
    setLocationEnabled(locationData.enabled);

    if(locationData.enabled) {
      userLocation.current = {
        lat: locationData.lat, 
        lng: locationData.lng
      };
    }

    //only update the location enabled state if it was previously false
    if(!locationChecked) {
      setLocationChecked(true);
    }
  }

  //function to search hikes
  const searchHikes = (e = null) => {

    //if an event was passed to the function prevent default reload
    if(e) {
      e.preventDefault();
    }

    //close the content window and display loader
    setContentWindowExpanded(false);
    setDisplayLoader(true);

    //make a copy of the requestParameters and add the user's location to it
    const requestParameters = parameters;
    requestParameters.userLat = userLocation.current.lat;
    requestParameters.userLng = userLocation.current.lng;

    //if location is enabled and the user isn't searching 100+ miles use getHikesWithLocation route, otherwise use getHikes
    const route = (locationEnabled && parameters.distance !== '100') ? '/getHikesWithLocation?' : '/getHikes?';
    
    //get hikes from server
    fetch(route + convertToURI(parameters), {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
      .then(response => response.json())
      .then(result => {
        //hide the loader and set the hikes state
        setDisplayLoader(false);
        setHikes(result);
      })
  }

  //convert an object to URI string (for get requests)
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

  //handles loader display
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
      setView={setView} />

    <Map
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      hikes={hikes}
      setSelectedHike={setSelectedHike}
      setView={setView}
      updateLocation={updateLocation} />

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
      locationEnabled={locationEnabled} />

    <Menu
      contentWindowExpanded={contentWindowExpanded}
      setContentWindowExpanded={setContentWindowExpanded}
      setView={setView}
      view={view} />

  </AppContainer>
  );
}

export default App;