const Employee = require('./Employee'); // require the parent class

class Intern extends Employee {

    // should I be passing in the employee object?
    constructor(name, school) {

        this.school = school;
    }

    getSchool () {
        return this.school; // return their gitHub username?
    }

    getRole () {
        // from assignment write up --- Overridden to return 'Manager' ????
        // change value in constructor or is this overiding the entire mehtod???
        this.role = 'intern';
    }
}

module.exports = Intern;