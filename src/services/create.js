"use strict"

const fs = require("fs");
const readlineSync = require("readline-sync");
const { defaultTaskValues } = require("../common/deafultTaskValues");
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
    tasksDB.historyTasks += 1;
    const newDate = new Date();
    task.status = defaultTaskValues.statusActive;
    task.dateCompletedTask = defaultTaskValues.dateCompletedTask
    task.createdAt = dateHandlerCreate(newDate);
    task.id = tasksDB.historyTasks;
    tasksDB.tasks.push(task);

    return tasksDB;
}

const createTask = () => {
    try {
        const taskToDB = {};
        Object.keys(questionToFillTask).forEach(async (key) => {
            while (!taskToDB[key]) {
                taskToDB[key] = questionAsk(questionToFillTask, key);
            }
        });

        const resTasks = addTask(tasksDB, taskToDB);

        fs.writeFileSync(pathToDB.path, JSON.stringify(resTasks), (err) => {
            if (err) throw err;
        });

        return;
    } catch (err) {
        console.log(`Error create task --> ${err}`);
    }
}

if(require.main === module) {
    createTask();
}

module.exports = createTask;