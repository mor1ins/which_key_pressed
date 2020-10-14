const { exec } = require("child_process");
const dotenv = require('dotenv');
dotenv.config();


const configuration = {
    production: 'node server.js',
    development: 'react-scripts start'
};


if (!(process.env.NODE_ENV in configuration)) {
    console.log(`${process.env.NODE_ENV} doesn't exist!`);
}
else {
    exec('npm start', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}
