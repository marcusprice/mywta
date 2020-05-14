const { Pool } = require('pg');
const pool = new Pool();

const getHikes = (parameters) => {
  const query = buildQuery(parameters);
  return pool.query(query.sql, query.values);
}

const buildQuery = (parameters, flag = '') => {
  let sql = 'SELECT * FROM hikes';
  let values = [parameters.lengthMin, parameters.elevationMin, parameters.elevationGainMin, parameters.minRating];
  //add lower range conditionals
  sql += ' WHERE (length >= $1 AND elevation >= $2 AND elevationgain >= $3 AND rating >= $4)';

  //add upper range conditionals
  if(parameters.lengthMax !== 50) {
    sql += ' AND (length <= $5)';
    values.push(parameters.lengthMax);
  }

  if(parameters.elevationMax != 10000) {
    sql += ' AND (elevation <= $6)';
    values.push(parameters.elevationMax);
  }

  if(parameters.elevationGainMax != 10000) {
    sql += ' AND (elevationgain <= $7)';
    values.push(parameters.elevationGainMax);
  }

  if(flag === 'getHikesWithLocation') {
    //add location/radius logic
  }

  //add region conditionals
  if(!parameters.centralCascades) sql += ' AND (region != \'Central Cascades\')';
  if(!parameters.centralWashington) sql += ' AND (region != \'Central Washington\')';
  if(!parameters.easternWashington) sql += ' AND (region != \'Eastern Washington\')';
  if(!parameters.issaquahAlps) sql += ' AND (region != \'Issaquah Alps\')';
  if(!parameters.mountRainierArea) sql += ' AND (region != \'Mount Rainier Area\')';
  if(!parameters.northCascades) sql += ' AND (region != \'North Cascades\')';
  if(!parameters.olympicPeninsula) sql += ' AND (region != \'Olympic Peninsula\')';
  if(!parameters.pugetSoundIslands) sql += ' AND (region != \'Puget Sound and Islands\')';
  if(!parameters.snoqualmieRegion) sql += ' AND (region != \'Snoqualmie Region\')';
  if(!parameters.southCascades) sql += ' AND (region != \'South Cascades\')';
  if(!parameters.centralCascades) sql += ' AND (region != \'Southwest Washington\')';

  //add pass requirement conditionals
  if(!parameters.discoverPass) sql += ' AND (passrequired != \'Discover Pass\')';
  if(!parameters.nationalParkPass) sql += ' AND (passrequired != \'National Park Pass\')';
  if(!parameters.northwestForestPass) sql += ' AND (passrequired != \'Northwest Forest Pass\')';
  if(!parameters.oregonStateParksDayUse) sql += ' AND (passrequired != \'Oregon State Parks Day-Use\')';
  if(!parameters.snoParksPermit) sql += ' AND (passrequired != \'Sno-Parks Permit\')';

  //add feature conditionals
  if(parameters.coast) sql += ' AND (coast = true)';
  if(parameters.rivers) sql += ' AND (rivers = true)';
  if(parameters.lakes) sql += ' AND (lakes = true)';
  if(parameters.waterfalls) sql += ' AND (waterfalls = true)';
  if(parameters.oldGrowth) sql += ' AND (oldgrowth = true)';
  if(parameters.fallFoliage) sql += ' AND (fallfoliage = true)';
  if(parameters.mountainViews) sql += ' AND (mountainviews = true)';
  if(parameters.summits) sql += ' AND (summits = true)';
  if(parameters.wildlife) sql += ' AND (wildlife = true)';
  if(parameters.ridgesPasses) sql += ' AND (ridgespasses = true)';
  if(parameters.establishedCampsites) sql += ' AND (establishedcampsites = true)';
  if(parameters.kidFriendly) sql += ' AND (kids = true)';
  if(parameters.dogFriendly) sql += ' AND (dogs = true)';

  sql += ';';

  return {
    sql: sql,
    values: values
  }
}

exports.getHikes = getHikes;
