

const fs = require('fs');
const router = require("../routes/user_routes");

function logReqResponse(filename)

{
    return (req, res, next) => {

        fs.appendFile(
            filename,
            `\n${Date.now()}: ${req.ip} ${req.method} ${req.url}}\n`,
            (err,data) =>
            {
                next();

            }
        );
    };
}

module.exports = {logReqResponse,};