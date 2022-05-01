const { createValidation } = require('../src/validation/createValidation');
const { updateValidation } = require('../src/validation/updateValidation');
const fs = require('fs');

describe('check validation folder', () => {
  test('check create validation', () => {
    const task1 = {
      name: "name",
      description: "description: ",
      difficulty: 3,
      importance: 1,
      deadline: "2022-07-01",
    };
    const task2 = {
      name: {},
      description: 132,
      difficulty: 5,
      importance: -2,
      deadline: '2000-1-2',
    };

    expect(createValidation('name', task1['name'])).toBe(true);
    expect(createValidation('description', task1['description'])).toBe(true);
    expect(createValidation('difficulty', task1['difficulty'])).toBe(true);
    expect(createValidation('importance', task1['importance'])).toBe(true);
    expect(createValidation('deadline', task1['deadline'])).toBe(true);

    expect(createValidation('name', task2['name'])).toBe(true);
    expect(createValidation('description', task2['description'])).toBe(true);
    expect(createValidation('difficulty', task2['difficulty'])).toBe(false);
    expect(createValidation('importance', task2['importance'])).toBe(false);
    expect(createValidation('deadline', task2['deadline'])).toBe(false);
  })
  
  test('check update validation', async () => {
    const path = '../../testDB/tasks.json';

    const db = {"tasks":[{"name":"one","description":"first task","difficulty":"3","importance":"3","deadline":"2022-07-09","status":"active","dateCompletedTask":null,"createdAt":"2022-04-30","id":1}],"historyTasks":3};

    fs.writeFileSync('./testDB/tasks.json', JSON.stringify(db));
    
    const task1 = {
      name: "name",
      description: "description: ",
      difficulty: 3,
      importance: 1,
      deadline: "2022-07-01",
      id: '1',
      status: 'active'
    };
    const task2 = {
      name: {},
      description: 132,
      difficulty: 5,
      importance: -2,
      deadline: '2000-1-2',
      id: 5,
      status: 'done'
    };

    expect(updateValidation('name', task1['name'], path)).toBe(true);
    expect(updateValidation('description', task1['description'], path)).toBe(true);
    expect(updateValidation('difficulty', task1['difficulty'], path)).toBe(true);
    expect(updateValidation('importance', task1['importance'], path)).toBe(true);
    expect(updateValidation('deadline', task1['deadline'], path)).toBe(true);
    expect(updateValidation('id', task1['id'], path)).toBe(1);
    expect(updateValidation('status', task1['status'], path)).toBe(true);

    expect(updateValidation('name', task2['name'], path)).toBe(true);
    expect(updateValidation('description', task2['description'], path)).toBe(true);
    expect(updateValidation('difficulty', task2['difficulty'], path)).toBe(false);
    expect(updateValidation('importance', task2['importance'], path)).toBe(false);
    expect(updateValidation('deadline', task2['deadline'], path)).toBe(false);
    expect(updateValidation('id', task2['id'], path)).toBe(undefined);
    expect(updateValidation('status', task2['status'], path)).toBe(true);
    
  })
})
