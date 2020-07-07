/**
 * hike routes
 * routes the requests to controllers based on URI
 * @module routes/hikes
 * @TODO add some api monitoring tools
 */

const cors = require('cors');
const hikes = require('../controllers/hikes');

module.exports = (app) => {
  //geolocation endpoint for api
  app.get('/api/v1/getHikesWithLocation', cors(), (req, res) => {
    //this endpoint requires userLat, userLng & distance params
    const requestKeys = Object.keys(req.query);
    if(requestKeys.includes('userLat') && requestKeys.includes('userLng') && requestKeys.includes('distance')) {
      hikes.getHikesWithLocation(req.query, hikeData => {
        res.json(hikeData);
      });
    } else {
      res.json({error: 'the request didn\'t include required userLat, userLng and/or distance parameters'});
    }
  });

  //non geolocation endpoint for api
  app.get('/api/v1/getHikes', cors(), (req, res) => {
    hikes.getHikes(req.query, hikeData => {
      res.json(hikeData);
    });
  });

  //geolocation endpoint reserved for mywta app
  app.get('/getHikesWithLocation', (req, res) => {
    hikes.getHikesWithLocation(req.query, hikeData => {
      res.json(hikeData);
    });
  });

  //non geolocation enpoint reserved for mywta app
  app.get('/getHikes', (req, res) => {
    hikes.getHikes(req.query, hikeData => {
      res.json(hikeData);
    });
  });
}
