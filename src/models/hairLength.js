var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var hairlength = sequelize.define('hairlength', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.hairlengths ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.hairlength = results[0].name;
                    })
            }
        }
    }
);

hairlength.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/hair.length.data').toString().split("\n");
    for(i in array) {
        hairlength.create({
            name: array[i]
        });
    }
});

exports.hairlength = hairlength;
