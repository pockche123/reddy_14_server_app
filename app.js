const express = require('express')
const cors = require("cors")
const quiz = require('./quiz.json')
const app = express()


app.get("/quiz", (req, res) => {
    res.status(200).send(quiz);
})

app.get("/quiz/questions",(req,res)=>{
    const randIdx = Math.floor(Math.random()*(quiz.length));
    res.send(quiz[randIdx]);
})

app.get("/scores/leaderboeard",(req,res)=>{
    res.send(score);
})

app.post("/score/update", (req,res)=>{
    const student = req.body;

})

module.exports = app;