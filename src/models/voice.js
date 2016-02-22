var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var voice = sequelize.define('voice', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.voices ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.voice = results[0].name;
                    })
            }
        }
    }
);

voice.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/voice.data').toString().split("\n");
    for(i in array) {
        voice.create({
            name: array[i]
        });
    }
});

exports.voice = voice;
