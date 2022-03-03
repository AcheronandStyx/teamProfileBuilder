const Team = require('./lib/Team');

new Team().buildTeam();

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