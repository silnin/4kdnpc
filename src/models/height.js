var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var height = sequelize.define('height', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.heights ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.height = results[0].name;
                    })
            }
        }
    }
);

height.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/height.data').toString().split("\n");
    for(i in array) {
        height.create({
            name: array[i]
        });
    }
});

exports.height = height;
