const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Object', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min:2,
                max:50
            }
        },
        type: {
            type:DataTypes.ENUM('Prise', 'Lumiere'),
            defaultValue: "Lumiere",
            allowNull:false
        },
        status: {
            type: DataTypes.BOOLEAN('disconnected', 'connected' ),
            defaultValue: 'disconnected',
            allowNull: false
        }
       
    },  {
        timestamps: true,
        createdAt: 'created',
        allowNull:false
      })
}