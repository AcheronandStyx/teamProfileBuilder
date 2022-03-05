const Employee = require('./Employee'); // require the parent class

class Manager extends Employee {
    // should I be passing in the employee object?
    constructor(name,id, email, officeNumber) {
        super(name, id, email); // pulls in the items from the parent class

        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        // from assignment write up --- Overridden to return 'Manager' ????
        // change value in constructor or is this overiding the entire mehtod???
       return 'Manager';
    }

}

module.exports = Manager;