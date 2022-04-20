"use strict"

const { taskFields } = require("../common/taskFields");
const { dateHandlerValid } = require("../helpers/dateHandler");
const { pathToDB } = require("../common/pathToDB");
const tasksDB = require(pathToDB.path);

const checkId = (value) => {
    const exist = tasksDB.tasks.find((item) => {
        if (item.id === Number(value)) {
            return true
        }
    })
    if(exist) {
        return Number(value);
    }
}

const checkStatus = (value) => {
    if((value === "active") || (value === "passed")) {
        return true;
    }
}

const updataValidation = (key, value) => {
    const rxDate = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/;
    const availableValueForNums = [1, 2, 3];

    switch (key) {
        case taskFields.name:
            return !!value;
        case taskFields.description:
            return !!value;
        case taskFields.difficulty:
            return availableValueForNums.includes(Number(value));
        case taskFields.importance:
            return availableValueForNums.includes(Number(value));
        case taskFields.deadline:
            return rxDate.test(value) && dateHandlerValid(value);
        case taskFields.id:
            return checkId(value);
        case taskFields.status:
            return checkStatus(value);
        default:
            return false;
    }
}

module.exports = { updataValidation };