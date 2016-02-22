var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var maleName = sequelize.define('maleName', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.maleNames ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.name = results[0].name;
                    })
            }
        }
    }
);

maleName.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/name.male.data').toString().split("\n");
    for(i in array) {
        maleName.create({
            name: array[i]
        });
    }
});

exports.maleName = maleName;
