const { where } = require('sequelize')
const {models} = require('../libs/sequelize')

class userService {
    constructor(){
        this.model = models.User
    }
    async getAll(){
        const users = await this.model.findAll({include: 'lista'})
        return users
    }
    async create(name,email,password,status){
        if(ListaId && lista){
            throw new Error("Error")
        }
        const values={
            name,
            email,
            password,
            status
        }
        if(ListaId)values.ListaId=ListaId
        if(lista)values.lista=lista
        const user = await this.model.create(values,{include:[{association:'lista'}]})
        return user
    }
    async delete(id){
        const user = await this.getOne(id)
        if(!user)return null
        await user.destroy()
        return user.id
    }
    async getOne(id){
        const user = await this.model.findByPk(id,{include:'lista'})
        return user
    }
    async update(id, values){
        const user= await this.model.findByPk(id)
        if(!user){
            return null
        }
        const updateUser=await user.update(values)
        return updateUser
    }
}

module.exports = userService