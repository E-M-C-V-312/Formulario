const listaService = require('./../services/lista.service')

class ListaController{
    constructor(){
        this.service = new ListaService()
    }
    async index(){
        const listas = await this.service.getAll()
        return listas
    }
    async create(fecha,ciudad,regionalcentrodeformacion,obgetivoEstrategicoPlan,obgetivoOperativoPlan,actividadRealizar,propositoActividad,nombreApellido,tipoDocumento,documento,genero,modalidadFormacion,ProgramaFormacion,jornadaFormacion,nivelFormacion,centroFormacion,correoElectronico,telefono,firma,user_id,lugar,status){
        const lista = await this.service.createLista(fecha,ciudad,regionalcentrodeformacion,obgetivoEstrategicoPlan,obgetivoOperativoPlan,actividadRealizar,propositoActividad,nombreApellido,tipoDocumento,documento,genero,modalidadFormacion,ProgramaFormacion,jornadaFormacion,nivelFormacion,centroFormacion,correoElectronico,telefono,firma,user_id,lugar,status)
        return lista
    }
    async findOne(id){
        const lista= await this.service.getOne(id)
        if(!lista){
            throw new Error('lista no encontrada')
        }
        return lista
    }
    async update(id, values){
        const lista= await this.service.updateLista(id,values)
        if(!lista){
            throw new Error('lista  no encontrada')
        }
        return lista
    }
    async delete(id){
        const lista = await this.service.deleteLista(id)
        if(!lista){
            throw new Error('lista no encontrada')

        }
        return lista
    }
}
module.exports= ListaController