var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var job = sequelize.define('job', {
        name: Sequelize.STRING
    }, {
        classMethods: {
            getRandom: function(npc) {

                sequelize.query("SELECT name FROM 4kdnpc.jobs ORDER BY RAND() LIMIT 1", { type: sequelize.QueryTypes.SELECT})
                    .then(function(results) {
                        npc.profession = results[0].name;
                    })
            }
        }
    }
);

job.sync({force: true}).then(function () {

    var array = fs.readFileSync('src/models/data/jobs.data').toString().split("\n");
    for(i in array) {
        job.create({
            name: array[i]
        });
    }
});

exports.job = job;
