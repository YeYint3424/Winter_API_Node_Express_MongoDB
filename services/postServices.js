const Post = require('../models/post')

const createPost = async (postData) => {
    const post_ = new Post(postData);
        try{
        const result = await post_.save()
        console.log(result)
        return result
    }catch(error){
        return error
    }
}

const updatePost = async(postId,postData) => {
    try{
        const result = await Post.findByIdAndUpdate(postId,postData,{
            new : true,
        })
        return result;
    }catch(error){
        return error
    }
}

const getAllPost = async() => {
    try {
        const result = await Post.find().sort({createdAt : -1}).populate("userId",["name"])
        return result
    }catch(error){
        return error;
    }
}

const getPostByPostId = async(postId) => {
    try {
        const result = await Post.findById(postId);
        return result
    }catch(error){
        return error;
    }
}

const getPostsByUserId = async(userId) => {
    try {
        const result = await Post.find({ userId: userId })
        return result
    }catch(error){
        return error;
    }
}
module.exports = {
    createPost,
    updatePost,
    getAllPost,
    getPostByPostId,
    getPostsByUserId
}