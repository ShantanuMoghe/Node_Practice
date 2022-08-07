const logger = (req, res, next)=>{
    const dateFullYear = new Date().getFullYear();
    console.log('This is middleware', req.url, req.method, dateFullYear);
    next();
}

module.exports = logger;