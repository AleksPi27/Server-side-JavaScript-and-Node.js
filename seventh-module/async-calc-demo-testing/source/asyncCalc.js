module.exports.asyncAdd = (a,b,cb) => {
    cb(a+b);
}

module.exports.asyncSub = (a,b, cb) => {
    cb(a-b);
}