const {Router} = require('express')
const userRouter = require('./users.routes')
const agendaRouter= require('./lista.routes')

function router(app){
    const router = Router()

    app.use('/api/v1', router)

    router.use('/lista',listaRouter)
}

module.exports = router