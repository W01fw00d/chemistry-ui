const express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  tagModel = require('./server/api/models/tag-model'),
  roomModel = require('./server/api/models/room-model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', () => {
  tagModel.initData(tagModel);
  roomModel.initData(roomModel);
});

app.use(function(req, res, next) {
  // We allow all origins for the moment for development purpouses
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./server/api/routes/escaping-boredom-route');
routes(app);

app.listen(port);

app.use(({ originalUrl }, res) => res.status(404).send(`"${originalUrl}" endpoint was not found`));

console.log('todo list RESTful API server started on: ' + port);
