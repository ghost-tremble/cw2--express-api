
const logger = ((req, res, next) => {

    console.log(`logging incoming request : [${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
  

  module.exports = logger