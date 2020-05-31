/**
 * Hikes model
 * DB logic for obtaining hike data
 * @module models/Hikes
 */

//bring in instantiate node-postgres library
const { Pool } = require('pg');
const pool = new Pool();
//maximum range consants
const LENGTH_MAX = 50;
const ELEVATION_MAX = 10000;
const ELEVATION_GAIN_MAX = 10000;

/** gets hike info from db without locational arguments */
const getHikes = (parameters) => {
  const query = buildQuery(parameters);
  return pool.query(query.sql, query.values);
}

/** gets hike info from db with locational arguments (hikes outside of range are filtered out)*/
const getHikesWithLocation = (paremeters, coordinateBoundries) => {
  const query = buildQuery(paremeters, coordinateBoundries);
  return pool.query(query.sql, query.values);
}

/**
 * buildQuery takes the parameters requested by the user and generates an SQL command for the
 * db. If coordinateBoundries are provided it will add extra logic to filter hikes out trails that
 * are outside of the boundries. Most non-boolean values are stored in a "values" array which are
 * then cleansed via the "battle-tested parameter substitution code" the node-postgres library
 * offers. The upper-range values are not added the values array, but are tested to be numbers before
 * the logic is added to the SQL command. The boolean values are hard-coded into the SQL command.
 *
 * @param {object} paremeters - the user's hike paremeters
 * @param {object} coordinateBoundries - optional argument - the coordinateBoundries for filtering
 * @return {object} the SQL command and values for non-boolean data
 */
const buildQuery = (parameters, coordinateBoundries = null) => {
  //initial query and numeric data in the values array
  let sql = 'SELECT * FROM hikes';
  let values = [parameters.lengthMin, parameters.elevationMin, parameters.elevationGainMin, parameters.minRating];

  //lower range conditionals
  sql += ' WHERE (length >= $1 AND elevation >= $2 AND elevationgain >= $3 AND rating >= $4)';

  //upper range conditionals (only added if it is a number value and below the set maximum value)
  if(Number.isInteger(parameters.lengthMax) && parameters.lengthMax !== LENGTH_MAX) {
    console.log('should fire');
    sql += ' AND (length <= ' + parameters.lengthMax + ')';
  }

  if(Number.isInteger(parameters.elevationMax) && parameters.elevationMax != ELEVATION_MAX) {
    sql += ' AND (elevation <= ' + parameters.elevationMax + ')';
  }

  if(Number.isInteger(parameters.elevationGainMax) && parameters.elevationGainMax != ELEVATION_GAIN_MAX) {
    sql += ' AND (elevationgain <= ' + parameters.elevationGainMax + ')';
  }

  //if coordinate boundries are provided, add additioanl logic to filter out hikes that fall outside of range
  if(coordinateBoundries) {
    sql += ' AND (latitude <= $5) AND (latitude >= $6) AND (longitude <= $7) AND (longitude >=  $8)';
    values = [...values, coordinateBoundries.maxLat, coordinateBoundries.minLat, coordinateBoundries.maxLng, coordinateBoundries.minLng];
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
  if(!parameters.southwestWashington) sql += ' AND (region != \'Southwest Washington\')';

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

  //return an object with the SQL code and array of values
  return {
    sql: sql,
    values: values
  }
}

exports.getHikes = getHikes;
exports.getHikesWithLocation = getHikesWithLocation;
