const express= require('express');
const app=express();

app.get('/',(req, res)=>{
     res.send('Hello world from the server');
});

app.get('/about',(req, res)=>{
    res.send('Hello About world from the server');
});

app.get('/signup',(req, res)=>{
    res.send('Hello Registraction page world from the server');
});

app.get('/contact',(req, res)=>{
    res.send('Hello Contact world from the server');
});


app.listen(3000, ()=> {
    console.log(`server is running at port no 3000`);
})