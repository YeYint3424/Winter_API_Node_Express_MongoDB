const route = require('express').Router();
const userRoute = require('./userRoutes')
const postRoute = require('./postRoutes')

route.use('/user',userRoute)
route.use('/post',postRoute)

module.exports = route