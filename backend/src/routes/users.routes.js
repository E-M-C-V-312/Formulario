const {Router} = require('express')
const userController = require('../controllers/user.controller')

const router = Router()
const controller = new userController()

router.get('/', async (req, res)=>{
    const users = await controller.index()
    res.json({users})
})

router.post('/',async (req,res)=>{
    const {name,email,password,status} = req.body
    const user = await controller.create(name,email,password,status,listaId,lista)
    res.status(201).json({user})
})

router.delete('/:id',async (req,res)=>{
    const {id}= req.params
    try {
        const user= await controller.delete(id)
        res.status(201).json({user})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
})



router.put('/:id', async(req,res)=>{
    const {id}= req.params
    const {email= '',name= '', status='', password='',listaId= 0} = req.body
    const values = {}
    if(email){
        values.email= email
    }
    if(name){
        values.name=name
    }
    if(typeof status== 'boolean'){
        values.status=status
    }
    if(password){
        values.password=password
    }
    if(listaId)values.listaId=listaId
    try{
        const user = await controller.update(id,values)
        res.status(200).json({user})
    }
    catch(error)
    {
        res.status(404).json({message: error.message})
    }
})

router.get('/:id', async(req,res)=>{
    try
    {
        const {id}= req.params
        const user= await controller.getOne(id)
        res.status(200).json({user})
    }
    catch(error)
    {
        res.status(404).json({message: error.message})
    }
})

module.exports = router