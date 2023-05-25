const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../database/Userdb')

userRouter.post('/', async (request, response) => {
  let { userFname, userLname,userEmail,userPassword,userAge,userGender} = request.body

  const saltRounds = 10
  userPassword = await bcrypt.hash(userPassword, saltRounds)
  const user = new User({
    userFname,
    userLname,
    userEmail,
    userPassword,
    userAge,
    userGender,
    
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = userRouter