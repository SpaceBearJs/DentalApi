const express = require('express');
const PacienteController = require('../database/controllers/PacienteController');
const router = express.Router();


router.post('/create', (req, res) => {
    PacienteController.create(req,res)
})

router.get('/',(req,res)=>{
    PacienteController.mostrar(req,res)
})

router.get('/:id/persona',(req,res)=>{
    PacienteController.mostrarOne(req,res)
})

// router.post('/:id/padre',(req,res)=>{
//     PacienteController.crearPadre(req,res)
// })

module.exports = router