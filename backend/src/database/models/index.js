const { User,UserSchema } = require('./user.model')
const { Lista,ListaSchema }= require('./lista.model')

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
    Lista.init(ListaSchema, Lista.config(sequelize))
    User.associate(sequelize.models)
    Lista.associate(sequelize.models)
}

module.exports = setupModels