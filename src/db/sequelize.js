const {Sequelize, DataTypes} = require('sequelize')
const UserModel = require('../Models/UserModels')
const invitationModel = require('../Models/invitationModels')
const ObjectModel = require('../Models/ObjectModels')
const PieceModel = require('../Models/PieceModels')
const MockUser = require('./mockUser')



const sequelize = new Sequelize('jarvis', 'root', '', {
    host: 'localhost',
    dialect:'mariadb',
    password: '123456',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
      },
    logging: false
})

const User = UserModel(sequelize, DataTypes)
// const Object = ObjectModel(sequelize, DataTypes)
// const Piece = PieceModel(sequelize, DataTypes)
// const Invitation = invitationModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({force:true})
  .then(_ =>{
    MockUser.map(user => {
      User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        date_de_naissance: user.date_de_naissance,
        password: user.password
      })
      .then(user => console.log(user.toJSON()))
    })



    console.log('mande le base');
  })
}

module.exports = {
  initDb, User
}

