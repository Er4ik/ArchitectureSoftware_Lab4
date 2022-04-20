const errorMsg = {
    name: "Incorrect name, field must be filled: ",
    description: "Incorrect description, field must be filled: ",
    difficulty: "Incorrect difficulty, field must contain number between 1-3: ",
    importance: "Incorrect importance, field must contain number between 1-3: ",
    deadline: "Incorrect date, it's must be later than date now or equals: ",
    id: "Incorrect task id", 
    status: "Incorrect status, it's must be 'active' or 'passed'"
};

module.exports = { errorMsg };
