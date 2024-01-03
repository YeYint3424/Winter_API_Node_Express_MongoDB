const route = require('express').Router()
const postController = require('../controller/postController')

route.post('/create',postController.postCreate )
route.put('/update/:postId',postController.postUpdate)
route.put('/delete/:postId',postController.postDelete )
route.get('/user/:userId',postController.postsByUser )
route.get('/all',postController.getAllPost)
route.get('/:postId',postController.getPostByPostId )

module.exports = route;