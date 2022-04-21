"use strict";
const fs = require("fs");
const { questionToDelete } = require("../common/question");
const { pathToDB } = require("../common/pathToDB");
const tasksDB = require(pathToDB.path);
const { errorMsg } = require("../common/errorMsg");
const readlineSync = require("readline-sync");

const questionAsk = (question) => {
    const value = readlineSync.question(question);
    let indexTask;
    const exist = tasksDB.tasks.find((item, index) => {
        if (item.id === Number(value)) {
            indexTask = index;
            return true
        }
    })
    if(exist) {
        return [Number(value), indexTask];
    }

    console.log(errorMsg.id);
    return;
}

const deleteTask = async () => {
    try {
        let id, index;
        while (!id) {
            const newArr = questionAsk(questionToDelete.id);
            if (newArr) {
                id = newArr[0];
                index = newArr[1];
            }
        }
        if (id) {
            tasksDB.tasks.splice(index, 1);
        }

        fs.writeFileSync(pathToDB.path, JSON.stringify(tasksDB), (err) => {
            if (err) throw err;
        });

        console.log("Task successfully deleted!");

        return;
    } catch (err) {
        throw new Error(`Error delete task --> ${err}`);
    }
};

if (require.main === module) {
    deleteTask();
}

module.exports = deleteTask;