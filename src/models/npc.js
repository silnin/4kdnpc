var Npc = sequelize.define('npc', {
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
    aspect_trouble: {
        type: Sequelize.STRING,
        field: 'aspect_trouble'
    },
    voice: {
        type: Sequelize.STRING,
        field: 'voice'
    },
    state: {
        type: Sequelize.STRING,
        field: 'state'
    },
    motivation: {
        type: Sequelize.STRING,
        field: 'motivation'
    },
    personality: {
        type: Sequelize.STRING,
        field: 'personality'
    },
    appearance: {
        type: Sequelize.STRING,
        field: 'appearance'
    },
    skills: {
        type: Sequelize.STRING,
        field: 'skills'
    },


}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

//User.sync({force: true}).then(function () {
//    // Table created
//    return User.create({
//        firstName: 'John',
//        lastName: 'Hancock'
//    });
//});