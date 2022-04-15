"use strict"

const { filteredTasksByStatus } = require("./filter");

const sortByDeadline = (tasks) => {
    return tasks.sort(function (current, next) {
        return new Date(current.deadline) - new Date(next.deadline);
    });
};

const sortByCreatedDate = () => {};

const sortByImportance = () => {};

const sortByDifficulties = () => {};

const sortByStatusAndDeadline = (tasks) => {
    const filteredTasks = filteredTasksByStatus(tasks);

    return sortByDeadline(filteredTasks);
};

module.exports = { sortByDeadline, sortByCreatedDate, sortByImportance, sortByDifficulties, sortByStatusAndDeadline };