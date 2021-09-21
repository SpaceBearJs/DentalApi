const Persona = require('../models/PersonaModel');
const Paciente = require('../models/PacienteModel');

module.exports = {
    create: (req, res) => {

        var { nombre, apellido } = req.body
        var { fConsulta, fUltConsulta, edad, cumpleanos } = req.body

        Persona.create({
            nombre: nombre,
            apellido: apellido
        })
            .then(persona => {
                Paciente.create({
                    fConsulta: fConsulta,
                    fUltimaConsulta: fUltConsulta,
                    edad: edad,
                    cumpleanos: cumpleanos
                })
                    .then(paciente => {
                        paciente.setPersona(persona)
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
    mostrar: (req, res) => {
        Paciente.findAll({
            include: {
                model: Persona,
                as: 'persona',
                attributes: ['nombre', 'apellido']
            },
            attributes: ['edad']
        }).then(pacientes => {
            res.json(pacientes)
        })
    },
    mostrarOne: (req, res) => {
        Paciente.findAll({
            include: {
                model: Persona,
                as: 'persona',
                attributes: ['nombre', 'apellido']
            },
            where: {
                id: req.params.id
            },
            attributes: ['edad']
        }).then(pacientes => {
            res.json(pacientes)
        })

    }
}