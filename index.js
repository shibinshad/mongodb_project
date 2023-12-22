const express = require("express");
const app = express();
const port = 3005;
const mongoose=require ("mongoose")
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/homepage", (req, res) => {
    res.render("homepage");
});

app.post('/homepage',(req,res)=>{
    res.redirect('/homepage')
})

app.listen(port, () => {
    console.log("server is created");
});

 mongoose.connect("mongodb://localhost:27017/project-database")
 .then(()=>{
    console.log('database is created');
 })
 .catch((err)=>{
    console.log(err);
 })
