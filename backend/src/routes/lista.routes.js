const { Router } = require('express')
const ListaController = require('./../controllers/lista.controller')

const router = Router()

const controller = new ListaController()

router.get('/', async (req, res) => {
    const lista = await controller.index()
    res.json({ listas })
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const lista = await controller.findOne(id)
        res.status(200).json({ lista })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const { fecha, hora_inicio, hora_fin, user_id, lugar, status } = req.body
    const lista = await controller.create({ fecha, hora_inicio, hora_fin, user_id, lugar, status })
    res.status(201).json({ lista })
})

router.put('/', async (req, res) => {
    const { id } = req.params
    const { fecha = '', objetivo = '', nombreApellido = '', documento = '', planta = '', contratista = '', otro = '', dependencia = '', correo = '', telefono = '', grabacion = '', firma = '' } = req.body
    const values = {}
    if (fecha) values.fecha = fecha
    if (objetivo) values.objetivo = objetivo
    if (nombreApellido) values.nombreApellido = nombreApellido
    if (documento) values.documento = documento
    if (planta) values.planta = planta
    if (contratista) values.contratista = contratista
    if (otro) values.otro = otro
    if (dependencia) values.dependencia = dependencia
    if (correo) values.correo = correo
    if (telefono) values.telefonoc = telefono
    if (grabacion) values.grabacion = grabacion
    if (firma) values.firma = firma
    try {
        const lista = await controller.update(id, values)
        res.status(200).json({ lista })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = router