const { user,userSchema } = require('./user.model')
const { lista,listaSchema }= require('./lista.model')

function setupModels(sequelize) {
    user.init(userserSchema.user.config(sequelize))
    lista.init(listaSchema.lista.config(sequelize))
    user.associate(sequelize.models)
    lista.associate(sequelize.models)
}

module.exports = setupModels