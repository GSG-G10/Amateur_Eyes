// this function take a url and return a data or throw an error
const fetch = require('node-fetch');
require('env2')('.env');
const client_id = process.env.UNSPLASH_CLIENT_ID;
const User_Data = (userName) => `https://api.unsplash.com/users/${userName}?client_id=${client_id}`;

const fetchData = (req, res, next) => {
    // you check if uesr will be you or not :) 
    fetch(User_Data(req.params.userName))
    .then(res => res.json())
    .then(json =>{
        //to passing variable to another middleware
            req.userData = json;
            return next();
    }).catch(err => {
        return "error";
    }
    );
}
module.exports = fetchData;