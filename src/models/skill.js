var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var skill = sequelize.define('skill', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.skills ORDER BY RAND() LIMIT 4", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.skill1 = results[0].name;
                        npc.skill2 = results[1].name;
                        npc.skill3 = results[2].name;
                        npc.skill4 = results[3].name;

                    })
            }
        }
    }
);

skill.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/skill.data').toString().split("\n");
    for(i in array) {
        skill.create({
            name: array[i]
        });
    }
});

exports.skill = skill;
