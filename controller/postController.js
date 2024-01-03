const postServices = require('../services/postServices')

const postCreate = async (req, res) => {
    const postData = req.body;
    try{
        const result = await postServices.createPost(postData)
        res.json(result)
    }catch(error){
        console.log(error);
    }
}
const postUpdate = async(req, res) => {
    const postData = req.body;
    const postId = req.params.postId
    try{
        const result = await postServices.updatePost(postId,postData)
        res.json(result)
    }catch(error){
        console.log(error);
    }
}

const postDelete = async(req, res) => {
    const postId = req.params.postId
    const postData = {
        status : false
    }

    try{
        const result = await postServices.updatePost(postId,postData)
        res.json(result)
    }catch(error){
        console.log(error);
    }
}

const getAllPost = async(req, res) => {

    try{
        const result = await postServices.getAllPost()
        res.json(result)
    }catch(error){
        console.log(error);
    }
}

const getPostByPostId = async(req, res) => {
    const postId = req.params.postId
    try{
        const result = await postServices.getPostByPostId(postId)
        res.json(result)
    }catch(error){
        console.log(error);
    }
}

const postsByUser = async(req,res) => {
    const userId = req.params.userId
    try{
        const result = await postServices.getPostsByUserId(userId)
        res.json(result)
    }catch(error){
        console.log(error);
    }
}
module.exports = {
    postCreate,
    postUpdate,
    postDelete,
    getAllPost,
    getPostByPostId,
    postsByUser
}