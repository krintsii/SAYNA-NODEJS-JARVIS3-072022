const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Piece', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                min: 2,
                max: 50
            },
            allowNull: false
        },
        cover: {
            type: DataTypes.STRING,
            validate: {
                min:2,
                max:255
            }
        }
       
    },  {
        timestamps: true,
        createdAt: 'created',
        allowNull:false
      })
}