const fs = require('fs');
const path = require('path');


const staticFile = async (req, res, next) => {
    const currentPath = __dirname.split("\\middleware")[0]
    const filePath = path.join(currentPath, "static", req.url, "")
    
    fs.stat(filePath, (err, fileInfo) => {
        if (err) return res.status(404).send({message: "image does not exist"});
        if (fileInfo.isFile()) res.sendFile(filePath);
        else next()
    })
}

module.exports = staticFile;