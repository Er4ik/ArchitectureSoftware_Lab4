"use strict"

const fs = require("fs");
const readlineSync = require("readline-sync");
const { errorMsg } = require("../common/errorMsg");
const { pathToDB } = require("../common/pathToDB");
const { questionToFillTask } = require("../common/question");
const { dateHandlerCreate } = require("../helpers/dateHandler");
const { createValidation } = require("../validation/createValidation");
const tasksDB = require(pathToDB.path);

const questionAsk = (questionObject, key) => {
    const value = readlineSync.question(questionObject[key]);

    if(createValidation(key, value)) {
        return value.trim();
    }

    console.log(errorMsg[key]);
    return;
}

const addTask = (tasksDB, task) => {
    tasksDB.amountTasks += 1;
    const newDate = new Date();
    task.createdAt = dateHandlerCreate(newDate);
    task.id = tasksDB.amountTasks;
    tasksDB.tasks.push({ [`task${tasksDB.amountTasks}`]: task });

    return tasksDB;
}

const createTask = async () => {
    try {
        const taskToDB = {};
        Object.keys(questionToFillTask).forEach(async (key) => {
            while (!taskToDB[key]) {
                taskToDB[key] = questionAsk(questionToFillTask, key);
            }
        });

        const resTasks = addTask(tasksDB, taskToDB);

        fs.writeFile(pathToDB.path, JSON.stringify(resTasks), (err) => {
            if (err) throw err;
            console.log("---> Task was successfully created <---");
        });

        return;
    } catch (err) {
        throw new Error(`Error create task --> ${err}`);
    }
}

if(require.main === module) {
    createTask();
}

module.exports = createTask;