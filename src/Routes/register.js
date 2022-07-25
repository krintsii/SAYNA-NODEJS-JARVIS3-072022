const { User } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')


module.exports = (app) => {
    app.post('/register', (req, res) => {
        User.create(req.body) 
        .then (User => {
            if (!req.body) {
                const message = 'un ou plusieurs données sont manquantes'
                return res.status(400).json({message: error.message, data: error})

            }
            const message = `L'utilisateur ${req.body.firstName} a bien été crée.`
            res.status(201).json({ message, data: User })
        })

        .catch(error => {

            if (error instanceof ValidationError) {
            //   console.log('aaaaaaaaaaa');
              return res.status(400).json({message: error.message, data: error})
            }
            if(error instanceof UniqueConstraintError) {
            //   console.log('bbbbbbbbbbbbbbbbb');
              return res.status(400).json({ message: error.message, data: error})
            }
            const message = `l'utilisateur n'a pas pu être ajouter, réessayer dans quelques instance.`
            console.log(error);
            res.status(400).json({message, data: error})
          })
         
    })
}