const path = require('path');
const express = require('express');
const app = express();
const compression = require('compression');
const profileRouter = require('./routers/profile');
 const {fetchData}= require('./controllers/utils');
// disable powered by express header
app.disable('x-powered-by');
// set port
const port = process.env.PORT || 5000;
app.set('port', port);
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// set static files location
app.use(express.static(__dirname + '/public'));
// this will improve when 
app.use("/profile", profileRouter)
app.get('/',(req,res)=>{
  // check if user is logged in
    res.sendFile(path.join(__dirname,'views','index.html'));
})
// handle error
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname,  'views', '404.html'));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, 'views', '500.html'));
});


app.listen(port, () => {
    console.log('Server listening on port ' + port);
});