//Use Engineer constructor
const Engineer = require('./lib/Engineer');

//test to see if engineer object is created
test('Creates new Engineer', () => {
    const engineer = new Engineer ('Dane', 'DaneCronin@gmail.com', 1);

    expect(engineer.name).toBe('Dane');
    expect(engineer.email).toBe('DaneCronin@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toBe('');

});