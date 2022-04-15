"use strict";

const { pathToDB } = require("../common/pathToDB");
const { checkExistsFileDb } = require("../helpers/checkExistsFileDb");
const { sortByStatusAndDeadline } = require("../helpers/sort");

const getSortedTask = async () => {
    try {
        checkExistsFileDb(pathToDB.path);

        const tasks = require(pathToDB.path);

        const resTasks = sortByStatusAndDeadline(tasks.tasks);

        console.log(resTasks);
        return;
    } catch (err) {
        throw new Error(`Error get tasks --> ${err}`);
    }
};

if (require.main === module) {
    getSortedTask();
}

module.exports = getSortedTask;
