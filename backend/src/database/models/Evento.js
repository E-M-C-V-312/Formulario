const { DataTypes, Model} = require('sequelize')
const USER_TABLE = 'users'

const UserSchema = {
    id: {
        type:
            DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type:
            DataTypes.STRING,
        allowNull: false
    },
    obgetivo: {
        type:
            DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fecha: {
        type:
            DataTypes.DATE,
        allowNull: false
    },
    Lider: {
        type:
            DataTypes.STRING,
        defaultValue: false
    },
    area: {
        type:
            DataTypes.STRING,
        defaultValue: false
    },
    listaid:{
        field: 'lista_id',
        type: DataTypes.INTEGER,
        references:{
            model: 'lista',
            key: 'id'
        },
        usuarioid:{
            field: 'usiario_id',
            type: DataTypes.INTEGER,
            references:{
                model: 'usuario',
                key: 'id'
            }
    }
}

class User extends Model {
    static associate(models) {
        this.hasMany(models.Lista,{as:'lista',foreignKey:'listaid'})
    }

    static config(sequelize) {
        return { sequelize, tableName: USER_TABLE, modelName: 'lista', timestamps: false }
    }
}   
    

module.exports = { USER_TABLE, UserSchema, User }