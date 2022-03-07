// parent class which forms the baseline for all employee types
class Employee {

    constructor(name, id, email) {

        // takes in an object with the user provided employee data
        // employee creation is two steps, base employee and then the other constructors are called based on the employeeTitle value?
        this.name = name;
        this.id =  id;
        this.email = email;
        //this.role = 'employee'; // not sure on this
    }

    getName() {
        // get the employees name
        return this.name;
    }

    getId() {
        // get the employees id
        return this.id; 
    }

    getEmail() {
        // return employees email
        return this.email;
    }

    getRole() {
        return 'Employee'; 
        // Returns 'Employee' ??? set the this.role to Employee or hard code Employee?
    }
}

module.exports = Employee; 