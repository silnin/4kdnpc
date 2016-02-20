var Sequelize = require('../seq').Sequelize;
var sequelize = require('../seq').sequelize;

var sex = sequelize.define('sex', {
    type: {
        type: Sequelize.STRING,
        field: 'type'
    },
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

sex.sync({force: true}).then(function () {
    //// Table created
    //return User.create({
    //    firstName: 'John',
    //    lastName: 'Hancock'
    //});

    sex.create({
        type: 'male'
    });

    sex.create({
        type: 'female'
    });
});

exports.sex = sex;
