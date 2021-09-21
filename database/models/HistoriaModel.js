const { Model,DataTypes} = require('sequelize')
const sequelize = require ('../db')

class Historia extends Model{}
    
Historia.init({
        tratamiento: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                min: 5,
                max: 30
            }
        },
        contenido: DataTypes.TEXT
},{
    sequelize,
    modelName:"historia",
    timestamps: false
});

module.exports = Historia
