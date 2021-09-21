const { Model,DataTypes} = require('sequelize')
const sequelize = require ('../db')

class Direccion extends Model{}
    
Direccion.init({
    calle:DataTypes.STRING
},{
    sequelize,
    modelName:"direccion",
    timestamps: false
});

module.exports = Direccion
