const notFound = (req, res, next) => {
  res.status(404).json({ success: false, msg: "this route not exist..." });
};
module.exports = notFound;
