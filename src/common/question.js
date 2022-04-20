const questionToFillTask = {
    name: "Enter task name: ",
    description: "Enter task description: ",
    difficulty: "Select difficulty for task, it's number between 1-3 (1-lowest priority, 3-highest priority): ",
    importance: "Select importance for task, it's number between 1-3 (1-lowest priority, 3-highest priority): ",
    deadline: "Enter deadline for task (YYYY-MM-DD): ",
};

const questionToSelectIndices = {
    question: "Select task by index to mark them done (ex. 1): ",
    error: "Incorrect indexes! Try again: ",
};

const questionToSelectCommand = {
    question: "Write necessary command: ",
    error: "Incorrect command! Try again: "
}

const questionToUpdateTask = Object.assign({
    id: "Enter task id: ",
    status: "Enter status task (active/done): ",
    }, 
    questionToFillTask
);

module.exports = { questionToFillTask, questionToSelectIndices, questionToSelectCommand, questionToUpdateTask };