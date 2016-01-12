var request = require('superagent'),
    async = require('async'),
    configAuth = require('../config/config'),
    _ = require('underscore');


module.exports = {

    getAllChamps: function(req, res, next) {
        var champsList;
        var response = res;
        var getChamps = function() {
            request
            .get('http://ddragon.leagueoflegends.com/cdn/5.23.1/data/en_US/champion.json')
            .end(function(err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    champsList = res.body.data;
                    response.json(champsList);
                }
            });
        };
        getChamps();
    }
};
