"use strict";

const { pathToDB } = require("../common/pathToDB");
const { checkExistsFileDb } = require('../helpers/checkExistsFileDb');
const { count } = require('../helpers/count');

const getStatistics = () => {
    try {
        checkExistsFileDb(pathToDB.path);

        const bd = require(pathToDB.path);
        const result = count(bd.tasks);

        console.log('active:', result.active);
        console.log('done:', result.done);
        return;   
    } catch (err) {
        throw new Error(`Error get tasks --> ${err}`)
    }
};

if (require.main === module) {
  getStatistics();
}

module.exports = getStatistics;
