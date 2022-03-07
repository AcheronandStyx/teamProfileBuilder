// base test on an employee file

const Employee = require('./lib/Employee.js');

test("Create an instance on EMployee Class", () =>{
    const sampleEmp = new Employee(); 
    except(typeof(sampleEmp)).toBe("object"); 
})

test("Pass name argument an Employee Class", () =>{
    const name = "Rick"; 
    const sampleEmp = new Employee(name); 
    except(sampleEmp.name).toBe("Rick"); 
}); 
// test all the methods, variables and creation of the object