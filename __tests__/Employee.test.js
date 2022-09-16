
//Use Employee constructor
const Employee = require('./lib/Employee');

//Test to see if employee object is created
test('Creates new Employee', () => {
    const employee = new Employee ('Dane', 'DaneCronin@gmail.com', 1);

    expect(employee.name).toBe('Dane');
    expect(employee.email).toBe('DaneCronin@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
    //expect(employee.github).toBe('');

});

//Test to see if gets name from getName()
test('gets employee name', () => {
    const employee = new Employee ('Dane', 'DaneCronin@gmail.com', 1);

    expect(employee.getName().toEqual('Dane'));
});


//Test to see if gets email from getEmail()
test('gets employee email', () => {
    const employee = new Employee ('Dane', 'DaneCronin@gmail.com', 1);

    expect(employee.getEmail().toEqual('DaneCronin@gmail.com'));
})

//Test to see if gets ID from getID()
test('gets employee ID', () => {
    const employee = new Employee ('Dane', 'DaneCronin@gmail.com', 1);

    expect(employee.getId().toEqual(expect.any(Number)));
})