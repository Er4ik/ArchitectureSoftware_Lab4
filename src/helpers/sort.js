"use strict"

const { defaultTaskValues } = require("../common/deafultTaskValues");

const sortByDeadline = (tasks) => {
    return tasks.sort(function (current, next) {
        return new Date(current.deadline) - new Date(next.deadline);
    });
};

const sortByCreatedDate = () => {};

const sortByImportance = () => {};

const sortByDifficulties = () => {};

const sortByStatusAndDeadline = (tasks) => {
    const filteredTasksByStatus = tasks.filter((elem) => {
        return elem.status === defaultTaskValues.status;
    });

    return sortByDeadline(filteredTasksByStatus);
};

module.exports = { sortByDeadline, sortByCreatedDate, sortByImportance, sortByDifficulties, sortByStatusAndDeadline };