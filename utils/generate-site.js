
const fs = require('fs'); // import fs library

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/teamPage.html', fileContent, err => {
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

const copyFile = () => {

    return new Promise((resolve, reject) => {

        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File copied!!'
            });
        });
    });
};

// export and object of functions.  Name of key and value are identical.
// This is shorthand property names. If we have a property key name with the same name as the value we're 
// associating with it, like writeFile: writeFile, we can just say writeFile.
module.exports = { writeFile, copyFile };