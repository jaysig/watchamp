var champsController = require('./champsController.js');

module.exports = function (app) {

  app.get('/getChamps', champsController.getAllChamps);

  app.route('/')
    .get(champsController.getAllChamps)
};
