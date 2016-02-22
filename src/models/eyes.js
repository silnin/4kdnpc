var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var eyes = sequelize.define('eyes', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.eyes ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.eyes = results[0].name;
                    })
            }
        }
    }
);

eyes.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/eyes.data').toString().split("\n");
    for(i in array) {
        eyes.create({
            name: array[i]
        });
    }
});

exports.eyes = eyes;
