const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.all('/*', (req, res, next) => {
  req.app.locals.layout = 'admin';
  next();
});

router.route('/')
  .get(adminController.index);

router.route('/post')
  .get(adminController.postList);

router.route('/post/create')
  .get(adminController.postCreate)
  .post(adminController.postSubmit);

router.route('/post/edit/:id')
  .get(adminController.postEdit);

router.route('/post/delete/:id')
  .delete(adminController.postDelete);

module.exports = router;
