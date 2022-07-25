const { User } = require('../db/sequelize')
const privateKey = require('../auth/private_key')
const jwt = require('jsonwebtoken')

module.exports = (app) => {
    app.post('/login', (req, res) => {
        User.findAll({ where: {  email: req.body.email, password: req.body.password}})
        .then (user => {
            if (!user) {
                const message = `l'utilisateur demané n'existe pas.`
                res.status(400).json({ message })
            } else if (User === null ) {
                const message = 'les données sont manquantes';
                res.status(400).json({ message })
            }

            //JWT
            const token = jwt.sign(
                { userId: user.id },
                privateKey,
                { expiresIn: '24h'}
            )

            const message = "login avec succès"
            return res.json({ message, data: user, token })
            
        })
        .catch(error => {
            console.log(error);
            const message = `L'utilisateur n'a pu être connecté. Réessayer dans un instants.`;
            return res.json({ message, data: error })
        })
    })
}