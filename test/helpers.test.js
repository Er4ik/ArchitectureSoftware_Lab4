const { filteredTasksByStatus } = require('../src/helpers/filter');
const { sortByStatusAndDeadline } = require('../src/helpers/sort');
const { sortByDeadline } = require('../src/helpers/sort');
const { sortAlgorithm } = require('../src/helpers/algorithm');
const { checkExistsFileDb } = require('../src/helpers/checkExistsFileDb');
const { count } = require('../src/helpers/count');
const { dateHandlerCreate, dateHandlerValid } = require('../src/helpers/dateHandler');

describe.skip('check sorted: status ||(&&) deadline', () => {
  let tasks;
  beforeEach(() => {
    tasks = [{
      "name":"one",
      "description":"first task",
      "difficulty":"3",
      "importance":"3",
      "deadline":"2022-07-09",
      "status":"done",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":1 },
      {"name":"two",
      "description":"second",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-05-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":2},
      {"name":"three",
      "description":"third",
      "difficulty":"2",
      "importance":"1",
      "deadline":"2023-02-03",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":3},
      {"name":"fore",
      "description":"fourth",
      "difficulty":"1",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":4}]
  });

  test('must return only active tasks', () => {
      const res = filteredTasksByStatus(tasks);
      expect(res).toEqual([
        {"name":"two",
        "description":"second",
        "difficulty":"2",
        "importance":"2",
        "deadline":"2022-05-09",
        "status":"active",
        "dateCompletedTask":null,
        "createdAt":"2022-04-30",
        "id":2},
        {"name":"three",
        "description":"third",
        "difficulty":"2",
        "importance":"1",
        "deadline":"2023-02-03",
        "status":"active",
        "dateCompletedTask":null,
        "createdAt":"2022-04-30",
        "id":3},
        {"name":"fore",
        "description":"fourth",
        "difficulty":"1",
        "importance":"2",
        "deadline":"2022-07-06",
        "status":"active",
        "dateCompletedTask":null,
        "createdAt":"2022-04-30",
        "id":4}]);
  });

  test('must return sorted by deadline', () => {
    const res = sortByDeadline(tasks);
    expect(res).toEqual([
      {"name":"two",
      "description":"second",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-05-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":2},
      {"name":"fore",
      "description":"fourth",
      "difficulty":"1",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":4},
      {"name":"one",
      "description":"first task",
      "difficulty":"3",
      "importance":"3",
      "deadline":"2022-07-09",
      "status":"done",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":1 },
      {"name":"three",
      "description":"third",
      "difficulty":"2",
      "importance":"1",
      "deadline":"2023-02-03",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":3}])
  })

  test('must return sorted by deadline and status', () => {
    const res = sortByStatusAndDeadline(tasks);
    expect(res).toEqual([
      {"name":"two",
      "description":"second",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-05-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":2},
      {"name":"fore",
      "description":"fourth",
      "difficulty":"1",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":4},
      {"name":"three",
      "description":"third",
      "difficulty":"2",
      "importance":"1",
      "deadline":"2023-02-03",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":3}])
  
  
  })
})

describe.skip('check sort algorithm', () => {
  test('sort algorithm', () => {
    const tasks = [{
      "name":"one",
      "description":"first task",
      "difficulty":"3",
      "importance":"3",
      "deadline":"2022-07-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":1 },
      {"name":"two",
      "description":"second",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-05-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":2},
      {"name":"three",
      "description":"third",
      "difficulty":"2",
      "importance":"1",
      "deadline":"2023-02-03",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":3},
      {"name":"fore",
      "description":"fourth",
      "difficulty":"1",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":4},
      {"name":"five",
      "description":"fifth",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":5},
      {"name":"six",
      "description":"sixth",
      "difficulty":"2",
      "importance":"3",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":6}];

    const res = sortAlgorithm(tasks);
    expect(res).toEqual([
      {"name":"two",
      "description":"second",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-05-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":2},
      {"name":"six",
      "description":"sixth",
      "difficulty":"2",
      "importance":"3",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":6},
      {"name":"five",
      "description":"fifth",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":5},
      {"name":"fore",
      "description":"fourth",
      "difficulty":"1",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":4},
      {"name":"one",
      "description":"first task",
      "difficulty":"3",
      "importance":"3",
      "deadline":"2022-07-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":1 },
      {"name":"three",
      "description":"third",
      "difficulty":"2",
      "importance":"1",
      "deadline":"2023-02-03",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":3},
      ])
    
  })
})

describe.skip('check exist file DB', () => {
  test('check exist file DB', () => {
    const path = "./testDB/tasks.json";
    const fs = require('fs');
    

    if(fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
    checkExistsFileDb(path);
    expect(fs.existsSync(path)).toBe(true);
  })
})

describe.skip('check count tasks', () => {
  test('return count active and done tasks', () => {
    const tasks = [{
      "name":"one",
      "description":"first task",
      "difficulty":"3",
      "importance":"3",
      "deadline":"2022-07-09",
      "status":"done",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":1 },
      {"name":"two",
      "description":"second",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-05-09",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":2},
      {"name":"three",
      "description":"third",
      "difficulty":"2",
      "importance":"1",
      "deadline":"2023-02-03",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":3},
      {"name":"fore",
      "description":"fourth",
      "difficulty":"1",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"done",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":4},
      {"name":"five",
      "description":"fifth",
      "difficulty":"2",
      "importance":"2",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":5},
      {"name":"six",
      "description":"sixth",
      "difficulty":"2",
      "importance":"3",
      "deadline":"2022-07-06",
      "status":"active",
      "dateCompletedTask":null,
      "createdAt":"2022-04-30",
      "id":6}];

    const res = count(tasks);
    expect(res).toEqual({
      active: 4,
      done: 2,
    })
  })
})

describe.skip('dataHandler', () => {
  test('data handler create', () => {
    const date1 = '2023.1.5';
    const res1 = dateHandlerCreate(date1);

    const date2 = '2022.11.10';
    const res2 = dateHandlerCreate(date2);

    const date3 = '2023.10.05';
    const res3 = dateHandlerCreate(date3);

    const date4 = '2023.10.22';
    const res4 = dateHandlerCreate(date4);
    
    expect(res1).toBe('2023-01-05');
    expect(res2).toBe('2022-11-10');
    expect(res3).toBe('2023-10-05');
    expect(res4).toBe('2023-10-22');
  })

  test('data handler valid', () => {
    const date1 = '2020-01-05';
    const res1 = dateHandlerValid(date1);

    const date2 = '2022-04-10';
    const res2 = dateHandlerValid(date2);

    const date3 = '2022-06-30';
    const res3 = dateHandlerValid(date3);

    const date4 = '2023-05-01';
    const res4 = dateHandlerValid(date4);

    expect(res1).toBe(false);
    expect(res2).toBe(false);
    expect(res3).toBe(true);
    expect(res4).toBe(true);
  })
})