const { defaultTaskValues } = require("../common/deafultTaskValues");

const filteredTasksByStatus = (tasks) => {
    return tasks.filter((elem) => {
        return elem.status === defaultTaskValues.statusActive;
    });
};

module.exports = { filteredTasksByStatus };
