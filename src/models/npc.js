var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;
var fs = require('fs');

var npc = sequelize.define('npc', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    sex: {
        type: Sequelize.STRING,
        field: 'sex'
    },
    age: {
        type: Sequelize.STRING,
        field: 'age'
    },
    profession: {
        type: Sequelize.STRING,
        field: 'profession'
    },
    trouble: {
        type: Sequelize.STRING,
        field: 'trouble'
    },
    voice: {
        type: Sequelize.STRING,
        field: 'voice'
    },
    state: {
        type: Sequelize.STRING,
        field: 'state'
    },
    trait: {
        type: Sequelize.STRING,
        field: 'trait'
    },
    skin: {
        type: Sequelize.STRING,
        field: 'skin'
    },
    haircolor: {
        type: Sequelize.STRING,
        field: 'haircolor'
    },
    hairstyle: {
        type: Sequelize.STRING,
        field: 'hairstyle'
    },
    hairlength: {
        type: Sequelize.STRING,
        field: 'hairlength'
    },
    eyes: {
        type: Sequelize.STRING,
        field: 'eyes'
    },
    height: {
        type: Sequelize.STRING,
        field: 'height'
    },
    build: {
        type: Sequelize.STRING,
        field: 'build'
    },
    skill1: {
        type: Sequelize.STRING,
        field: 'skill1'
    },
    skill2: {
        type: Sequelize.STRING,
        field: 'skill2'
    },
    skill3: {
        type: Sequelize.STRING,
        field: 'skill3'
    },
    skill4: {
        type: Sequelize.STRING,
        field: 'skill4'
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

exports.npc = npc;
