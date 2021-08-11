// this function take a url and return a data or throw an error
const fetch = require('node-fetch');
require('env2')('.env');
const client_id = process.env.UNSPLASH_CLIENT_ID;
const User_Data =(userName)=> `https://api.unsplash.com/users/${userName}?client_id=${client_id}`;

const fetchData = (req,res,next) => {
    console.log('fetchData')
    fetch(User_Data(req.params.userName))
    .then(res => res.json())
    .then(json =>{
        //to passing variable to another middleware
        req.userData = json;
    })
    .catch(err => console.log(err))
    next();
}
module.exports = fetchData;
