const blogsRouter = require('express').Router();
const Blog = require('../models/blog');


blogsRouter.get('/', (_, response) => {
    Blog.find({})
        .then(blogs => {
            response.json(blogs);
        })
})

blogsRouter.post('/', (request, response) => {
    const blog = request.body;

    blog.save()
        .then(result => {
            response.set(201).json(result);
        })
})

module.exports = blogsRouter;