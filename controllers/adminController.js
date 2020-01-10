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
    let allowComments = req.body.allowComments ? true : false;
    let newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      allowComments: allowComments
    });
    newPost.save().then(post =>{
      req.flash('messSuccess','Add new post successfully !');
      res.redirect('/admin/post');
    });
  },

  postEdit: (req, res) => {
    var postId = req.params.id;
    Post.findById(postId).then(result => {
      res.render('admin/post/edit',{
        post: result
      });
    });
  },

  postDelete: (req, res) => {
    Post.findByIdAndDelete(req.params.id).then(postDelete => {
      req.flash('messSuccess', `The post ${postDelete.id} has been deleted.`);
      res.redirect('/admin/post');
    });
  }

}
