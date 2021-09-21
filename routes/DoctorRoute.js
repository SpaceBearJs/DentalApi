const express = require('express');
const DoctorController = require('../database/controllers/DoctorController');
const router = express.Router();


router.post('/create', (req, res) => {
    DoctorController.create(req,res)
})

router.get('/',(req,res)=>{
    DoctorController.mostrar(req,res)
})

router.get('/:id/persona',(req,res)=>{
    DoctorController.mostrarOne(req,res)
})

module.exports = router