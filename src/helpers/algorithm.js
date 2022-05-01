"use strict";
const { sortByDeadline } = require("./sort");

const sortAlgorithm = (tasks) => {
    const byDeadline = sortByDeadline(tasks);
    return byDeadline.sort(sortFunction);

};

const sortFunction = (current, next) => {
  if (current.deadline === next.deadline) {
    if (current.importance > next.importance) return -1;
    if (current.importance < next.importance) return 1;
    if (current.importance === next.importance) {
      if (current.difficulty > next.difficulty) return -1;
      if (current.difficulty < next.difficulty) return 1;
    }
  }
  return 0;
}

module.exports = { sortAlgorithm };