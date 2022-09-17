//Use Intern constructor
const Intern = require('../lib/Intern');

//test to see if Intern object is created
test('Creates new Intern', () => {
    const intern = new Intern ('Dane', 'DaneCronin@gmail.com', 1);

    expect(intern.name).toBe('Dane');
    expect(intern.email).toBe('DaneCronin@gmail.com');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.github).toBe('');

});