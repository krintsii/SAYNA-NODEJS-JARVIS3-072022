const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true 
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: { msg:'le nom est obligatoire.'},
                len: { 
                    args: [2, 25],
                    msg: "The firstname length should be between 2 and 25 characters."
                }
                
            },
            
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: { msg:'le prénom est obligatoire.'},
                len: { 
                    args: [2, 25],
                    msg: "The lastname length should be between 2 and 25 characters."
                }
            },
            
        }, 
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: { msg:'l\'Email est obligatoire.'},
                isEmail: { msg:'le structure d\'email est obligatoire. '},
                len: { 
                    args: [10, 150],
                    msg: "The email length should be between 2 and 25 characters."
                }
            },
            
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: { 
                    args: [7, 20],
                    msg: "The password length should be between 7 and 20 characters."
                }
            }
        },
        date_de_naissance: {
            type: DataTypes.STRING,
            allowNull: false ,
            validate: {
                isDate: true,
                notEmpty: true,
                notNull: true
            }
        },
        token: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                min: 50,
                max: 90,
                isAlphanumeric: true,
            },
            unique: true
        },
        Role: {
            type: DataTypes.ENUM("Tuteur", "Enfant", "Admin"),
            defaultValue: "Tuteur",
            allowNull: false,
        },
        Sexe: {
            type: DataTypes.ENUM("Homme", "Femme"),
            defaultValue: "Femme",
            allowNull: false,
        }
        

    }, {
        timestamps: true,
        createdAt: 'created',
        allowNull:false
      })

}