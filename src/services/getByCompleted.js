"use strict";

const fs = require("fs");
const { basicFileDB } = require("../common/basicFileDB");
const { pathToDB } = require("../common/pathToDB");

const checkExistsFileDb = (path) => {
    if (!fs.existsSync(path)) {
        fs.writeFile(path, JSON.stringify(basicFileDB), (err) => {
            if (err) throw err;
            console.log("---> File DB was successfully created <---");
        });
    }

    return;
};

const getTask = async () => {
    try {
        checkExistsFileDb(pathToDB.path);

        const tasks = require(pathToDB.path);

        const resTasks = tasks.tasks.map((task) => {
            return task;
        });

        console.log(resTasks);
        return;
    } catch (err) {
        throw new Error(`Error get tasks --> ${err}`);
    }
};

if (require.main === module) {
    getTask();
}

module.exports = getTask;
