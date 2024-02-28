const { DataTypes, Model } = require('sequelize')

const LISTA_TABLE= 'lista'

const ListaSchema={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    objetivo:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    nombresApellidos:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
    planta:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    contratista:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    otro:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dependencia:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correoElectronico:{
        type: DataTypes.EMAIL,
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false
    },
    grabacion:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    firma:{
        type: DataTypes.STRING,
        allowNull: false
    },
    usuarioid:{
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        references:{
            model: 'usuario',
            key: 'id'
        }
    }
    
}
class lista extends Model {
    static associate(models) {
        static associate(models) {
            this.hasMany(models.User,{as: 'user',foreignKey:'listaid'})
    }
    
        static config(sequelize) {
            return { sequelize, tableName: LISTA_TABLE, modelName: 'Lista', timestamps: false }
        }
    }


module.exports = { LISTA_TABLE, ListaSchema, lista}
