var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var trouble = sequelize.define('trouble', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.troubles ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        //console.log(results[0].type);
                        //return results[0].type;
                        npc.trouble = results[0].name;
                    })
            }
        }
    }
);

trouble.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/trouble.data').toString().split("\n");
    for(i in array) {
        trouble.create({
            name: array[i]
        });
    }
});

exports.trouble = trouble;
