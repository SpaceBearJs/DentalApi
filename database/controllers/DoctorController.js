const Persona = require('../models/PersonaModel');
const Doctor = require('../models/DoctorModel');

module.exports = {
    create: (req, res) => {
        var { nombre, apellido } = req.body
        var { especialidad } = req.body

        Persona.create({
            nombre: nombre,
            apellido: apellido
        })
            .then(persona => {
                Doctor.create({
                    especialidad:especialidad
                })
                    .then(doctor => {
                        doctor.setPersona(persona)
                            .then(rs => {
                                res.json(rs)
                            })
                            .catch(e => {
                                res.json(e)
                            })
                    })
                    .catch(e => {
                        res.json(e)
                    })
            })
            .catch(e => {
                res.json(e)
            })
    },
    mostrar: (req,res) => {
        Doctor.findAll({
            include:{
                model:Persona,
                as:'persona',
                attributes:['nombre','apellido']
            },
            attributes:['especialidad']
        }).then(doctores =>{
            res.json(doctores)
        })
    },
    mostrarOne: (req,res)=>{
        Doctor.findAll({
            include:{
                model:Persona,
                as:'persona',
                attributes:['nombre','apellido']
            },
            where: {
                id: req.params.id
            },
            attributes:['especialidad']
        }).then(doctores =>{
            res.json(doctores)
        })
    }
}