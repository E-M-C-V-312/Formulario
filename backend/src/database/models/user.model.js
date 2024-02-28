const { DataTypes, Model} = require('sequelize')
const USER_TABLE = 'users'

const userSchema = {
    id: {
        type:
            DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type:
            DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:
            DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type:
            DataTypes.STRING,
        allowNull: false
    },
    status: {
        type:
            DataTypes.BOOLEAN,
        defaultValue: false
    },
    listaid:{
        field: 'lista_id',
        type: DataTypes.INTEGER,
        references:{
            model: 'lista',
            key: 'id'
        }
    }
}

class User extends Model {
    static associate(models) {
        this.belongsTo(models.Area,{as:'lista',foreignKey:'listaid'})
    }

    static config(sequelize) {
        return { sequelize, tableName: USER_TABLE, modelName: 'lista', timestamps: false }
    }
}   
    

module.exports = { USER_TABLE, UserSchema: userSchema, User }