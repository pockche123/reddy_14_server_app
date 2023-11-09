const express = require('express')
const cors = require('cors')
let quiz = require('./quiz.json')
const scores = require('./score.json')
const app = express()
const logger = require("./logger")

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.status(200).send('Hello team!')
})

app.get('/quiz', (req, res) => {
  res.status(200).send(quiz)
})

app.get('/quiz/questions', (req, res) => {
  const randIdx = Math.floor(Math.random() * quiz.length)
  res.send(quiz[randIdx])
})

app.get('/scores/easy', (req, res) => {
  const easyScores = scores
    .filter(score => score.difficulty === 'easy')
    .sort((a, b) => b.score - a.score)
  res.status(200).send(easyScores)
})

app.get('/scores/medium', (req, res) => {
  const mediumScores = scores
    .filter(score => score.difficulty === 'medium')
    .sort((a, b) => b.score - a.score)
  res.status(200).send(mediumScores)
})

app.get('/scores/hard', (req, res) => {
  const hardScores = scores
    .filter(score => score.difficulty === 'hard')
    .sort((a, b) => b.score - a.score)
  res.status(200).send(hardScores)
})

app.get('/scores/user/:username', (req, res) => {
  const username = req.params.username
  const userScore = scores.filter(score => score.username === username)
  if (userScore) {
    res.status(200).send(userScore)
  } else {
    res.status(404).send({ error: `Score of ${username} not found` })
  }
})

app.post('/score', (req, res) => {
  const newScore = req.body
  if (newScore.username && newScore.score >= 0 && newScore.difficulty) {
    scores.push(newScore)
    res.status(201).send(newScore)
  } else {
    res.status(422).send({ error: 'Some or all of the post info are missing.' })
  }
})

app.patch('/score/user/:username', (req, res) => {
  const { score } = req.body
  console.log(score)
  const username = req.params.username
  const player = scores.find(player => player.username === username)
  console.log('player score ', player.score)

  if (player) {
    if (score > player.score) {
      player.score = score
      res.status(200).send(player)
    } else {
      res
        .status(422)
        .send({ error: 'Score is less or equal than that it currently is' })
    }
  } else {
    res.status(404).send({ error: 'cannot update missing score' })
  }
})

app.delete('/places/:country', (req, res) => {
  const country = req.params.country.toLowerCase()

  const match = quiz.find(c => c.country.toLowerCase() === country)

  if (match) {
    quiz = quiz.filter(c => c.country.toLowerCase() === country)
    res.status(204).send()
  } else {
    res.status(404).send('Country not found')
  }
})

module.exports = app
