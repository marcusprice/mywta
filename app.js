const express = require('express');
const app = express();
const port = process.env.PORT || 5000
app.use(express.static('./client/build'));

require('./routes/hikes')(app);

app.listen(port, () => {
  console.log('listening on port ' + port);
})
 
