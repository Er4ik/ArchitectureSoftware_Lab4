'use strict'

const count = (tasks) => {
  const count = {
    active: 0,
    done: 0,

  };

  tasks.map((item) => {
    count[item.status] += 1;
  })
  
  return count;
}

module.exports = { count };