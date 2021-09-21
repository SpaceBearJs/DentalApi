const Direccion = require('./models/DireccionModel');
const Doctor = require('./models/DoctorModel');
const Historia = require('./models/HistoriaModel');
const Paciente = require('./models/PacienteModel');
const Persona = require('./models/PersonaModel')

//Paciente-Persona
Persona.hasOne(Paciente)
Paciente.belongsTo(Persona,{
    as:'persona'
})

//Doctor-Persona
Persona.hasOne(Doctor)
Doctor.belongsTo(Persona,{
    as:'persona'
})

// //Persona-Persona (hijos)
// Persona.hasMany(Persona,{
//     as:"padre",
//     foreignKey:"hijo_id"
// })
// Persona.belongsTo(Persona,{
//     as:"hijo",
//     foreignKey:"hijo_id"
// })