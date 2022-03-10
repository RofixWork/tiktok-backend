const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500).json({ success: false, msg: error });
  }
};
module.exports = errorHandler;
