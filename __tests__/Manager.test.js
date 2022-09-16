//Use Manager constructor
const Manager = require('./lib/Manager');

//test to see if manager object is created
test('Creates new Manager', () => {
    const manager = new Manager ('Dane', 'DaneCronin@gmail.com', 1);

    expect(manager.name).toBe('Dane');
    expect(manager.email).toBe('DaneCronin@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.github).toBe('');

});