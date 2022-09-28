const handleNotFound = (req, res) => {
  const { path } = req
  res
    .status(404)
    .json({
      status: 404,
      pathname: path,
      message: "this url match hasn't exist",
    })
    .end()
}

module.exports = handleNotFound
