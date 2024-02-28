const {models} = require('../libs/sequelize')
const {where}= require('sequelize')

class listaService{
    constructor(){
        this.model= models.Lista
    }
    async getAll(){
        const lista = await this.model.findAll()
        return lista
    }
    async getOne(id){
        const lista= await this.model.findByPk(id)
        return lista
    }
    async createLista(fecha,objetivo,nombreApellido,documento,planta,contratista,otro,dependencia,correo,telefono,grabacion,firma){
        const lista= await this.model.create(fecha,objetivo,nombreApellido,documento,planta,contratista,otro,dependencia,correo,telefono,grabacion,firma)
        return lista
    }
    async deleteLista(id){
        const lista= await this.getOne(id)
        if(!lista)return null
        await lista.destroy()
        return lista.id
    }
    async updateAgenda(id, values){
        const lista= await this.getOne(id)
        if(!lista)return null
        await lista.update(values)
        return lista
    }
}
module.exports= listaService
