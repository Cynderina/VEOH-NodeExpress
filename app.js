const express = require('express');
const PORT = process.env.PORT || 8080;

//server
let app  = express();

app.use((req, res, next)=>
{
    console.log(`path: ${req.path}`);
    next();
});

app.get('/', (req, res, next)=> 
{
    res.send('Hello world 2!');
    //res.end();
})

app.use((req, res, next) =>
{
    res.status(404);
    res.send(`
    page not found
    `);
});
//app.post()

app.listen(PORT);