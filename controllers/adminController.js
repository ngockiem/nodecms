const Post = require('../models/postModel').Post;
module.exports = {
  index: (req, res) => {
    res.render('admin/index');
  },

  postList: (req, res) => {
    Post.find().then(posts =>{
      res.render('admin/post/post', {
        posts: posts
      });
    });

  },
  postCreate: (req, res) => {
    res.render('admin/post/create');
  },
  postSubmit: (req, res) => {
    let newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    });
    newPost.save().then(post =>{
      req.flash('messSuccess','Add new post successfully !');
      res.redirect('/admin/post');
    });
  }

}
