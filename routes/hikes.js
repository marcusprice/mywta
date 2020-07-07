/**
 * hike routes
 * routes the requests to controllers based on URI
 * @module routes/hikes
 * @TODO add POST, PUT & DELETE request logic for API feature (even though data is read-only)
 */

const cors = require('cors');
const hikes = require('../controllers/hikes');

module.exports = (app) => {
  //non geolocation enpoint reserved for mywta app
  app.get('/getHikes', (req, res) => {
    hikes.getHikes(req.query, hikeData => {
      res.json(hikeData);
    });
  })

  //geolocation endpoint reserved for mywta app
  app.get('/getHikesWithLocation', (req, res) => {
    hikes.getHikesWithLocation(req.query, hikeData => {
      res.json(hikeData);
    });
  });

  //non geolocation endpoint for api
  app.get('/api/v1/getHikes', cors(), (req, res) => {
    hikes.getHikes(req.query, hikeData => {
      console.log(hikeData);
      res.end();
    });
  });
  
  //geolocation endpoint for api
  app.get('/api/v1/getHikesWithLocation', cors(), (req, res) => {

  });
}
