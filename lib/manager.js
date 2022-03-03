const Employee = require('./Employee'); // require the parent class

class Manager extends Employee {

    // should I be passing in the employee object?
    constructor(name, officeNumber) {

        this.officeNumber = officeNumber;
    }

    getRole () {
        // from assignment write up --- Overridden to return 'Manager' ????
        // change value in constructor or is this overiding the entire mehtod???
        this.role = 'manager';
    }

}

module.exports = Manager;