const express = require('express')
const cors = require("cors")
const quiz = require('./quiz.json')
const scores = require('./score.json')
const app = express()


app.get("/", (req, res) => {
    res.status(200).send("Hello team!")
})

app.get("/quiz", (req, res) => {
    res.status(200).send(quiz);
})

app.get("/quiz/questions",(req,res)=>{
    const randIdx = Math.floor(Math.random()*(quiz.length));
    res.send(quiz[randIdx]);
})

app.get("/scores/easy", (req, res) => {
    const easyScores = scores.filter(score => score.difficulty === "easy").sort((a, b) => b.score - a.score); 
    res.status(200).send(easyScores);
})

app.get("/scores/medium", (req, res) => {
    const easyScores = scores.filter(score => score.difficulty === "medium").sort((a, b) => b.score - a.score); 
    res.status(200).send(easyScores);
})

app.get("/scores/hard", (req, res) => {
    const easyScores = scores.filter(score => score.difficulty === "hard").sort((a, b) => b.score - a.score); 
    res.status(200).send(easyScores);
})

app.get("/scores/user/:username", (req, res) => {
    const username = req.params.username; 
    const userScore = scores.filter(score => score.username === username); 
    if (userScore) {
        res.status(200).send(userScore); 
    } else {
        res.status(404).send({error: `Score of ${username} not found`})
    }
})


app.post("/score", (req, res) => {
    const newScore = req.body; 
    if (newScore.username && newScore.score && newScore.difficulty) {
        res.status(201).send(newScore);
    } else {
        res.status(422).send({error:"Some or all of the post info are missing."})
        
    }
    

})

app.patch('/update-score', (req, res) => {
    const { username, score } = req.body;
  
    // Find the player with the specified username
    const player = score.find(player => player.username === username);
  
    if (player && player.score < score) {
      // Update the player's score if the username exists and he got a higher score
      player.score = score;
      res.json({ message: 'Score updated' });
    } else {
        if (!player){
            // Add a new player entry if the username doesn't exist
            score.push(req.body);
            res.json({ message: 'New player added' });
        }else{
            res.json({ message: 'new score was lower than record' });
        }
    }
})

module.exports = app;