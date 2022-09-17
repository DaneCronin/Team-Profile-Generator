//Use Intern constructor

const Intern = require('../lib/Intern');

//test to see if Intern object is created
test('Creates new Intern', () => {
    const intern = new Intern ('Jane', 'janedoe@gmail.com', 1, 'UNCC');

    expect(intern.name).toBe('Jane');
    expect(intern.email).toBe('janedoe@gmail.com');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toEqual(expect.any(String));

});

//gets school from getSchool()
test('gets intern school', () => {
    const intern = new Intern ('Jane', 'janedoe@gmail.com', 1, 'UNCC');
    
    expect(intern.getSchool()).toEqual(expect.any(String));
});

//gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern ('Jane', 'janedoe@gmail.com', 1, 'UNCC');

    expect(intern.getRole()).toEqual("Intern");
});