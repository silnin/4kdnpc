var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var hairstyle = sequelize.define('hairstyle', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.hairstyles ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.hairstyle = results[0].name;
                    })
            }
        }
    }
);

hairstyle.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/hair.style.data').toString().split("\n");
    for(i in array) {
        hairstyle.create({
            name: array[i]
        });
    }
});

exports.hairstyle = hairstyle;
