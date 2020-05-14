const hikes = require('../controllers/hikes');

module.exports = (app) => {
  app.get('/getHikes', (req, res) => {
    hikes.getHikes(req.query, (hikeData) => {
      console.log(hikeData[0]);
      res.json(hikeData);
    });
  })
}
