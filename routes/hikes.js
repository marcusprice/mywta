const hikes = require('../controllers/hikes');

module.exports = (app) => {
  app.get('/getHikes', (req, res) => {
    hikes.getHikes(req.query, hikeData => {
      res.json(hikeData);
    });
  })

  app.get('/getHikesWithLocation', (req, res) => {
    hikes.getHikesWithLocation(req.query, hikeData => {
      res.json(hikeData);
    });
  })
}
