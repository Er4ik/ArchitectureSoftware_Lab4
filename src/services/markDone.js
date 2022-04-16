"use strict";

const fs = require("fs");
const readlineSync = require("readline-sync");
const { defaultTaskValues } = require("../common/deafultTaskValues");
const { pathToDB } = require("../common/pathToDB");
const { questionToSelectIndices } = require("../common/question");
const { checkExistsFileDb } = require("../helpers/checkExistsFileDb");
const { filteredTasksByStatus } = require("../helpers/filter");

const checkTask = (tasks) => {
    return tasks.map((task) => {
        return `id: ${task.id}, name: ${task.name}`;
    });
};

const indicesTasks = (tasks) => {
    return tasks.map((task) => {
        return task.id;
    });
};

const selectIndices = () => {
    const number = readlineSync.question(questionToSelectIndices.question);

    try {
        const resNum = Number(number.trim());
        return resNum;
    } catch (error) {
        console.log(questionToSelectIndices.error);
        return;   
    }
}

const markTaskDoneHandler = (index, tasks) => {
    const arrTasks = tasks.tasks.map((task) => {
        if(task.id === index) {
            task.status = defaultTaskValues.statusDone;
        }
        return task;
    })

    tasks.tasks = arrTasks;

    return tasks;
}

const markTaskDone = async () => {
    try {
        checkExistsFileDb(pathToDB.path);

        const tasks = require(pathToDB.path);

        const filteredTasks = filteredTasksByStatus(tasks.tasks);
        const infoTasks = checkTask(filteredTasks);

        console.log(`\nAvailable tasks to mark done:\n${infoTasks.join("\n")}\n`);

        let index = selectIndices();

        while (!indicesTasks(tasks.tasks).includes(index)) {
            index = selectIndices();
        }

        const resTasks = markTaskDoneHandler(index, tasks);
        
        fs.writeFileSync(pathToDB.path, JSON.stringify(resTasks), (err) => {
            if (err) throw err;
        });

        return;   
    } catch (err) {
        throw  new Error(`Error mark task done --> ${err}`)
    }
};

if (require.main === module) {
    markTaskDone();
}

module.exports = markTaskDone;
