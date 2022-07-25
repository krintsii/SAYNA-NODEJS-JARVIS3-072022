const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Invitation', {
        id_receveur: {
            type:DataTypes.INTEGER,
            // autoIncrement:true,
        },
        id_demandeur: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    })
}