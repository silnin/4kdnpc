var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var haircolor = sequelize.define('haircolor', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.haircolors ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.haircolor = results[0].name;
                    })
            }
        }
    }
);

haircolor.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/hair.color.data').toString().split("\n");
    for(i in array) {
        haircolor.create({
            name: array[i]
        });
    }
});

exports.haircolor = haircolor;
