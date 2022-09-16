const { default: test } = require('node:test');
//Use Employee constructor
const Employee = require('./lib/Employee');

//test to see if employee object is created
test('Creates new Employee', () => {
    const employee = new Employee ('Dane', 'DaneCronin@gmail.com', '1');

    expect(employee.name).toBe('Dane');
    expect(employee.email).toBe('DaneCronin@gmail.com');
    expect(employee.id).toEqual('1');
    expect(employee.github).toBe('');

});


