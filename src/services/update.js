"use strict";
const fs = require("fs");
const { questionToUpdateTask } = require("../common/question");
const { pathToDB } = require("../common/pathToDB");
const tasksDB = require(pathToDB.path);
const { updataValidation } = require("../validation/updataValidation");
const { errorMsg } = require("../common/errorMsg");
const readlineSync = require("readline-sync");


const questionAsk = (questionObject, key) => {
    const value = readlineSync.question(questionObject[key]);

    if(updataValidation(key, value)) {
        if (key === 'id') {
            return Number(value);
        }
        return value;
    }

    console.log(errorMsg[key]);
    return;
}
const updateDB = (id, taskToDB) => {
    let taskToDelete;
    tasksDB.tasks.find((item) => {
        if (item.id === Number(id)) {
            taskToDelete = item;
        }
    })

    const index = tasksDB.tasks.indexOf(taskToDelete);
    tasksDB.tasks.splice(index, 1);
    tasksDB.tasks.push(taskToDB);
    return tasksDB;
};

const updateTask = async () => {
    try {
        const taskToDB = {};
        Object.keys(questionToUpdateTask).forEach(async (key) => {
            while (!taskToDB[key]) {
                taskToDB[key] = questionAsk(questionToUpdateTask, key);
            }
        });

        const newDB = updateDB(taskToDB.id, taskToDB);

        fs.writeFileSync(pathToDB.path, JSON.stringify(newDB), (err) => {
            if (err) throw err;
        });

        return;
    } catch (err) {
        throw new Error(`Error update task --> ${err}`);
    }
};

if (require.main === module) {
    updateTask();
}

module.exports = updateTask;
