module.exports = {
  'mongoDBUrl': 'mongodb://localhost:27017/cms',
  'PORT' : process.env.PORT || 3000,
  globalVariables: (req, res, next) => {
    res.locals.success_message = req.flash('messSuccess');
    res.locals.error_message = req.flash('messError');
    next();
  }
};
