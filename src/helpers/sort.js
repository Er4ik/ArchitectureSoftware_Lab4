"use strict"

const sortByStatus = async (tasks) => {
    return tasks.filter((elem) => {
        return elem.status !== 'active';
    })
}

const sortByImportance = async () => {};

const sortByDifficulties = async () => {};

module.exports = { sortByDate, sortByImportance, sortByDifficulties };