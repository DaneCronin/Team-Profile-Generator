// use Employee constructor as parent
const Employee = require('./Employee');

//Manager constructor
class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    //Change employee role to Manager
    getRole () {
        return "Manager";
    }
};

module.exports = Manager;