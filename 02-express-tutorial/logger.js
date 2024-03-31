const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()

    console.log(method, url, time)

    console.log(method, url, time, `it's working!`)

    next()
  }

  module.exports = logger