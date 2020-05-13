const express = require('express');
const app = express();
const port = process.env.PORT || 5000
app.use(express.static('./client/build'));

app.get('/getHikes', (req, res) => {
  console.log(req.query);
  res.json({hike: 'data'})
});

app.listen(port, () => {
  console.log('listening on port ' + port);
})
