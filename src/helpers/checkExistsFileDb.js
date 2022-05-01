const fs = require('fs');
const { basicFileDB } = require('../common/basicFileDB');

const checkExistsFileDb = (path) => {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, JSON.stringify(basicFileDB), (err) => {
            if (err) throw err;
            console.log("---> File DB was successfully created <---");
        });
    }

    return;
};

module.exports = { checkExistsFileDb };