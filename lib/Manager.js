const { throwStatement } = require("@babel/types");

//Manager constructor
class Manager {
    constructor(name, email, id, officeNumber) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber
    }
}

module.exports = Manager;