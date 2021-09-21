const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Doctor extends Model { }

Doctor.init({
    // Model attributes are defined here
    especialidad: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"No puede ser nulo"
            }
        }
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'doctores',
    timestamps: false
});

module.exports = Doctor;