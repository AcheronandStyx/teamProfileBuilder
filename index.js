const Team = require('./lib/Team');

const fs = require('fs'); // import fs library

new Team().buildTeam();

// function to generate the html this verison requires no promises
//fs.writeFileSync("./dist/teamPage.html", generatepage(arr))

/*
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });

    });
};
*/

/*
Call build team from "main"
Then push the new team to create-team-page.js
and write to file from imported write to file function, see week 9 work
*/

/*
Questions for Namita
Can I push an inquirer question object like this? Team.js line 20
Should the function to add a team member be its own prototype? Team.js line 40
I have the inquirer prompts split into two arrays and concatenate / push to them to form the correct array.  I did this because I wasn't sure on the logic to make sure only one manager is created for the team. prompts.js lines 73-112 & Team.js lines 19-35 
It says we're supposed to overide the this.role value with manger / engineer / intern.  Not sure on the logic to make sure only one manager is created
Does this validation checkout? prompts.js line 101-103
The methods for the various classes seem basic.  I think i'm missing somoething. Employee/Manager/Engineer/Intern.js
I am very shaky on writing unit tests and TDD.
*/