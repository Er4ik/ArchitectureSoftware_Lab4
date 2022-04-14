"use strict"

const fs = require("fs");
const readlineSync = require("readline-sync");
const { pathToDB } = require("../common/pathToDB");
const { questionToFillTask } = require("../common/question.common");

const createTask = async () => {
    try {
        const taskToDB = {};

        Object.keys(questionToFillTask).forEach((key) => {
            taskToDB[key] = readlineSync.question(questionToFillTask[key]);
        });

        fs.writeFile(pathToDB.path, JSON.stringify(taskToDB), (err) => {
            if (err) throw err;
            console.log("---> Task was successfully created <---");
        });

        return;
    } catch (err) {
        throw new Error(`Error create task --> ${err}`);
    }
}

if (require.main === module) {
    createTask();
}

module.exports = createTask;