const Employee = require('./Employee'); // require the parent class

class Engineer extends Employee {

    // should I be passing in the employee object?
    constructor(name, id, email, gitHub) {
        super(name, id, email); // pulls in the items from the parent class
        this.gitHub = gitHub;
    }

    getGitHub () {
        return this.gitHub; // return their gitHub username?
    }

    getRole () {
        // from assignment write up --- Overridden to return 'Manager' ????
        // change value in constructor or is this overiding the entire mehtod???
        return 'Engineer';
    }

}

module.exports = Engineer;