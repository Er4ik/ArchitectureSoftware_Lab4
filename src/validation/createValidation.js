"use strict"

const { taskFields } = require("../common/taskFields");
const { dateHandlerValid } = require("../helpers/dateHandler");

const createValidation = (key, value) => {
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
        default:
            return false;
    }
}

module.exports = { createValidation };