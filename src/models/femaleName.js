var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var femaleName = sequelize.define('femaleName', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.femaleNames ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.name = results[0].name;
                    })
            }
        }
    }
);

femaleName.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/name.female.data').toString().split("\n");
    for(i in array) {
        femaleName.create({
            name: array[i]
        });
    }
});

exports.femaleName = femaleName;
