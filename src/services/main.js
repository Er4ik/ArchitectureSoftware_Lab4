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
const getSortedByAlgorithm = require("./getSortedAlgorithm");
const getStatistics = require("./getStatistics");

const todoTasks = () => {

    console.log(massageMain.msg);

    while (true) {
        const command = readlineSync.question(`\n${questionToSelectCommand.question}`);

        if (command === commands.create) {
            createTask();
        } else if (command === commands.update) {
            updateTask();
        } else if (command === commands.delete) {
            deleteTask();
        } else if (command === commands.getAll) {
            getTask();
        } else if (command === commands.getSorted) {
            getSortedTask();
        } else if (command === commands.getSortedByAlgorithm) {
            getSortedByAlgorithm();
        } else if (command === commands.markedDone) {
            markTaskDone();
        } else if (command === commands.getStatistics) {
            getStatistics();
        } else if (command === commands.quit) {
            return;
        } else {
            console.log(questionToSelectCommand.error);
        }
    }
};

todoTasks();