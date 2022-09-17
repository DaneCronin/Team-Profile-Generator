//Use Manager constructor
const { default: test } = require('node:test');
const Manager = require('../lib/Manager');

//test to see if manager object is created
test('Creates new Manager', () => {
    const manager = new Manager ('Dane', 'DaneCronin@gmail.com', 1, 3036411791,);

    expect(manager.name).toBe('Dane');
    expect(manager.email).toBe('DaneCronin@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

//Get role from getRole()
// test('gets role of employee', () => {
//     const manager = new Manager ('Dane', 'DaneCronin@gmail.com', 1, 3036411791,);

//     expect(manager.getRole()).toEqual("Manager");
// });

