// Route
const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
        return res.json({ success: false, err });
    }
    
    return res.json(posts.reverse());
  })
});

router.post('/', (req, res) => {
  // Gets comments
  const { comments, user } = req.body;
  
  // Creates new post
  const post = new Post();
  post.comments = comments;
  post.user = user;

  // Saves post
  post.save(err => {
      if (err) {
          return res.json({ success: false, err });
      }

      return res.json({
        success: true
      });
  });
});

module.exports = router;
