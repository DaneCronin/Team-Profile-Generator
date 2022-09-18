

//Use Engineer constructor

const Engineer = require('../lib/Engineer');

//test to see if engineer object is created
test('Creates new Engineer', () => {
    const engineer = new Engineer ('Jane', 'JaneDoe@gmail.com', 1, 'janedoe');

    expect(engineer.name).toBe('Jane');
    expect(engineer.email).toBe('JaneDoe@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.gitHub).toBe('janedoe');

});

// test get GitHub from getGitHub()
test('gets engineer github user', () => {
    const engineer = new Engineer ('Jane', 'JaneDoe@gmail.com', 1, 'janedoe');
    
    expect(engineer.getGitHub()).toBe('janedoe');
});

// test gets Role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer ('Jane', 'JaneDoe@gmail.com', 1, 'janedoe');;

    expect(engineer.getRole()).toEqual("Engineer");
});