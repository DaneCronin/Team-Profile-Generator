

//Use Engineer constructor

const Engineer = require('../lib/Engineer');

//test to see if engineer object is created
test('Creates new Engineer', () => {
    const engineer = new Engineer ('Dane', 'DaneCronin@gmail.com', 1, 'danecronin');

    expect(engineer.name).toEqual('Dane');
    expect(engineer.email).toEqual('DaneCronin@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.gitHub).toEqual(expect.any(String));

});

// test get GitHub from getGitHub()
test('gets engineer github user', () => {
    const engineer = new Engineer ('Dane', 'DaneCronin@gmail.com', 1, 'danecronin');
    
    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

// test gets Role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer ('Dane', 'DaneCronin@gmail.com', 1, 'danecronin');

    expect(engineer.getRole()).toEqual("Engineer");
});