require('dotenv').config();                   //environment variables
const express = require('express');           //express app
const port = process.env.PORT || 5000;        //in development the client/CRA runs on port 3000

//instantiate express and set the static directory
const app = express();
app.use(express.static('./client/build'));

//api routes
require('./routes/hikes')(app);

app.listen(port, () => {
  console.log('listening on port ' + port);
})
