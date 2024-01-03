const route = require('express').Router()
const userController = require('../controller/userController')

route.get('/all',userController.allUsers)
route.post('/create',userController.createUser)
route.get('/:userId', userController.getUserById)
route.put('/update/:userId', userController.userUpdate)
route.put('/delete/:userId', userController.userDelete)
route.post('/find',userController.userFind)

module.exports = route;