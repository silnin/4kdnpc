var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var build = sequelize.define('build', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.builds ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.build = results[0].name;
                    })
            }
        }
    }
);

build.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/build.data').toString().split("\n");
    for(i in array) {
        build.create({
            name: array[i]
        });
    }
});

exports.build = build;
