const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Paciente extends Model { }

Paciente.init({
    // Model attributes are defined here
    fConsulta: {
        type: DataTypes.DATEONLY
    },
    fUltimaConsulta: {
        type: DataTypes.DATEONLY
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          args:true,
          msg:"La edad debe tener solo números"
        },
        min: {
          args: 1,
          msg:"No puede tener menos de 1 año"
        },
        max:{
          args: 100,
          msg:"No puede tener más de 100 años"
        }
      }
    },
    cumpleanos:{
      type: DataTypes.DATEONLY
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'pacientes',
    timestamps: false
});

module.exports = Paciente;