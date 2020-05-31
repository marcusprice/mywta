/**
 * hike routes
 * routes the requests to controllers based on URI
 * @module routes/hikes
 * @TODO add POST, PUT & DELETE request logic for API feature (even though data is read-only)
 */

//requires hike controller
const hikes = require('../controllers/hikes');

module.exports = (app) => {
  //non locatoinal route
  app.get('/getHikes', (req, res) => {
    hikes.getHikes(req.query, hikeData => {
      res.json(hikeData);
    });
  })

  //locational route
  app.get('/getHikesWithLocation', (req, res) => {
    hikes.getHikesWithLocation(req.query, hikeData => {
      res.json(hikeData);
    });
  })
}
