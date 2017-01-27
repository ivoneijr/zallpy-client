var express = require('express');
var compression = require('compression');
var open = require('open');

const app = express();
const port = process.env.PORT || 8080;

// compress requests
app.use(compression());

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

//routes
app.get('/ping', (req, res) => {
  res.send({status: 'ok'});
});

// set the home page route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});