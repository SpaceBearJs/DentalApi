const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Persona extends Model { }

Persona.init({
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"El campo no puede ser nulo"
      },
      isAlpha:{
        args:true,
        msg:"Solo se aceptan letras"
      },
      len:{
        args:[2,100],
        msg:"El nombre debe tener al menos 3 y 100 caracteres"
      }
    },
  },
  apellido: {
    type: DataTypes.STRING,
    validate:{
      isAlpha:{
        args:true,
        msg:"Solo se aceptan letras"
      },
      max:100
    }
  }
}, {
  sequelize,
  underscored: true,
  modelName: 'personas',
  timestamps: false
});

module.exports = Persona;