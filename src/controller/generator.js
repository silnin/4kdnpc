var express = require('express');
var router = express.Router();
var sex = require('../models/sex').sex;
var femaleName = require('../models/femaleName').femaleName;
var maleName = require('../models/maleName').maleName;
var npc = require('../models/npc').npc;
var job = require('../models/job').job;
var skill = require('../models/skill').skill;
var trouble = require('../models/trouble').trouble;
var trait = require('../models/trait').trait;
var voice = require('../models/voice').voice;
var build = require('../models/build').build;
var eyes = require('../models/eyes').eyes;
var hairColor = require('../models/hairColor').haircolor;
var hairLength = require('../models/hairLength').hairlength;
var hairStyle = require('../models/hairStyle').hairstyle;
var height = require('../models/height').height;

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {

    sex.getRandom(npc);

    setTimeout(function() {
        console.log('sex determined');
    }, 10);

    if (npc.sex == 'male') {
        maleName.getRandom(npc);
    } else {
        femaleName.getRandom(npc);
    }

    job.getRandom(npc);

    trait.getRandom(npc);

    npc.age = Math.floor(Math.random() * 60) + 12

    skill.getRandom(npc);

    trouble.getRandom(npc);

    voice.getRandom(npc);
    build.getRandom(npc);
    eyes.getRandom(npc);
    hairColor.getRandom(npc);
    hairLength.getRandom(npc);
    hairStyle.getRandom(npc);
    height.getRandom(npc);

    // show result
    setTimeout(function() {
        var message = '<table>';
        message += '<tr><td colspan="2"><h2>' + npc.name + ' (' + npc.sex + ', ' + npc.age + ')</h2></td></tr>';
        message += '<tr><td><b>High Concept</b></td><td>' + npc.trait + ' ' + npc.profession + '</td></tr>';
        message += '<tr><td><b>Trouble Aspect</b></td><td>' + npc.trouble + '</td></tr>';
        var skills = npc.skill1 + ' (+4), ' + npc.skill2 + ' (+3), ' + npc.skill3 + ' (+2), ' + npc.skill4 + ' (+1)';
        message += '<tr><td><b>Skills</b></td><td>' + skills + '</td></tr>';

        message += '<tr><td colspan="2">----------------------</td></tr>';
        message += '<tr><td><b>Voice</b></td><td>' + npc.voice + '</td></tr>';
        message += '<tr><td><b>Height</b></td><td>' + npc.height + '</td></tr>';
        message += '<tr><td><b>Build</b></td><td>' + npc.build + '</td></tr>';

        if (npc.hairstyle != 'Bald') {
            message += '<tr><td><b>Hair</b></td><td>' + npc.haircolor + ', ' + npc.hairlength + ', ' + npc.hairstyle + '</td></tr>';
        } else {
            message += '<tr><td><b>Hair</b></td><td>' + npc.hairstyle + '</td></tr>';
        }

        message += '<tr><td><b>Eyes</b></td><td>' + npc.eyes + '</td></tr>';

        //@todo might want to do these traits some day...
        //message += '<tr><td>Appearance</td><td>' + npc.appearance + '</td></tr>';
        //message += '<tr><td>State</td><td>' + npc.state + '</td></tr>';

        message += '</table>';

        res.send(message);
    }, 30);

});

// define the about route
router.get('/about', function(req, res) {
    res.send('About generators');
});

module.exports = router;