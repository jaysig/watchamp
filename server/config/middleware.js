var morgan = require('morgan'),
  bodyParser = require('body-parser'),
  helpers = require('./helpers.js')

module.exports = function(app, express) {
  // Express 4 allows us to use multiple routers with their own configurations

  //var userRouter = express.Router();

  var champsRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  //register /api/... and assign routers that will take care of it 
  app.use('/api/champs', champsRouter);
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../champs/champsRoutes.js')(champsRouter);
};
