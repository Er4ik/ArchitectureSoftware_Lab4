"use strict";

const updateTask = async () => {
    try {
        return;
    } catch (err) {
        throw new Error(`Error update task --> ${err}`);
    }
};

if (require.main === module) {
    updateTask();
}

module.exports = updateTask;
