var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var trait = sequelize.define('trait', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.traits ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.trait = results[0].name;
                    })
            }
        }
    }
);

trait.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/traits.data').toString().split("\n");
    for(i in array) {
        trait.create({
            name: array[i]
        });
    }
});

exports.trait = trait;
