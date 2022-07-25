const auth = require('../auth/auth')
const { User } = require('../db/sequelize')



module.exports = (app) => {
    app.post('/invitation',auth, (req, res)=> {
        User.findOne({ where: {email: req.body.email} })
        .then(user => {
            if(!user) {
                console.log("aaaaaaaaaaaaaaaaaaaa");
                const message = `l'utilisateur demané n'existe pas.`
                res.status(400).json({ message })
            } else if  (user === '') {
                console.log("bvbbbbbbbbbb");
                const message = `l'utilisateur a manqueé.`
                res.status(400).json({ message })
            }

            const message = "l\'invitation est bien envoyer"
            return res.status(200).json({message, data: user})
        })
        .catch(error => {
            const message = 'vous n\'êtes pas inscrits, veuiller faire l\'inscription'
            return res.status(400).json({message, data:error})
        })
    })
} 