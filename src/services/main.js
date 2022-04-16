"use strict";

const readlineSync = require("readline-sync");
const { commands } = require("../common/commands");
const { massageMain } = require("../common/massageMain");
const { questionToSelectCommand } = require("../common/question");
const createTask = require("./create");
const deleteTask = require("./delete");
const getTask = require("./get");
const getSortedTask = require("./getSorted");
const markTaskDone = require("./markDone");
const updateTask = require("./update");

const todoTasks = () => {

    console.log(massageMain.msg);

    while (true) {
        const command = readlineSync.question(`\n${questionToSelectCommand.question}`);

        if (command === commands.create) {
            createTask();
        }
        
        if (command === commands.update) {
            updateTask();
        }
        
        if (command === commands.delete) {
            deleteTask();
        }
        
        if (command === commands.getAll) {
            getTask();
        }
        
        if (command === commands.getSorted) {
            getSortedTask();
        }
        
        if (command === commands.markedDone) {
            markTaskDone();
        }

        if (command === commands.quit) {
            return;
        }
    }
};

todoTasks();