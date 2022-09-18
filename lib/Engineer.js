//Use Employee constructor as parent
const Employee = require('./Employee');

//Engineer constructor
class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
       super (name, email, id) 
       
       this.gitHub = gitHub;
    }

    //get gitHub from getGitHub
    getGitHub() {
        return this.gitHub;
    }

    //change employee role to engineer
    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;