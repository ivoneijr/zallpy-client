var express = require('express');
var open = require('open');

const app = express();
const port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

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