const express = require('express')
const cors = require("cors")
const quiz = require('./quiz.json')
const app = express()

app.get("/quiz/questions",(req,res)=>{
    const randIdx = Math.floor(Math.random()*(quiz.length));
    res.send(quiz[randIdx]);
})

app.get("/scores/leaderboeard",(req,res)=>{
    res.send(score);
})

app.post("/score/update", (req,res)=>{
    const request = req.body[0];
    if (request.student && isNaN(request.student)){
        //check if the student is already present in the score.json file
        //if yes, add request.score to their score
        //else update score.jason with req.body
    }
    else {
        res.status(406).json({message: "enter a valid name please"})
    }
})

module.exports = app;