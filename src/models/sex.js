var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var sex = sequelize.define('sex', {
        type: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT type FROM 4kdnpc.sex ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.sex = results[0].type;
                    })
            }
        }
    }
);

sex.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/sex.data').toString().split("\n");
    for(i in array) {
        sex.create({
            type: array[i]
        });
    }
});

exports.sex = sex;
