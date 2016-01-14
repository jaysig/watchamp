var LolApi = require('leagueapi'),
config = require('/config/config.js');


LolApi.init(leagueAPIKey, 'na');

LolApi.getChampions(true, function(err, champs) {
    console.log(champs);
});

LolApi.Summoner.getByName('YOLO Swag 5ever', function(err, summoner) {
    if(!err) {
        console.log(summoner);
    }
})
