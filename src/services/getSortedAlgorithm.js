"use strict";

const { pathToDB } = require("../common/pathToDB");
const { checkExistsFileDb } = require("../helpers/checkExistsFileDb");
const { sortAlgorithm } = require("../helpers/algorithm");

const getSortedByAlgorithm = () => {
    try {
        checkExistsFileDb(pathToDB.path);

        const tasks = require(pathToDB.path);

        const resTasks = sortAlgorithm(tasks.tasks);

        console.log(resTasks);
        return;
    } catch (err) {
        throw new Error(`Error get tasks --> ${err}`);
    }
};

if (require.main === module) {
    getSortedByAlgorithm();
}

module.exports = getSortedByAlgorithm;