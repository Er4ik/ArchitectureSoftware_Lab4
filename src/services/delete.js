"use strict";

const deleteTask = async () => {
    try {
        return;
    } catch (err) {
        throw new Error(`Error delete task --> ${err}`);
    }
};

if (require.main === module) {
    deleteTask();
}

module.exports = deleteTask;