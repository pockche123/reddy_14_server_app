# Lap1_final_project

## description

It is a fun and engaging web application designed to make the entire learning experience more exciting for non-STEM subjects(for now it only has a geography game).

This is achieved by transforming the learning experience into a quiz-like game, where students can choose their own usernames, play at different difficulty levels, and earn scores based on their performance.
There is also a leaderboard that displays the usernames and scores of the players who achieved the highest scores to encourage competitiveness in the game.

## Installation & usage

git clone the repository and run "npm install" in the terminal inside the directory and then run "node inde.js", the terminal will let you know what port the app is listening on.

## Technologies

the back end of the app was developed using Express.js and the front end was developed using HTML, CSS and JavaScript.

## API

the API was implemented using Express.js. The data is stored in 2 json files, (score.json and country.json), and it processes the data using different methods at different endpoints, such as:

get at "/quiz/questions" => responds with a random country, its capital and its flag from the country.json file.

post at "/score" => checks the body of the request and adds the score to the quiz.json file.

patch at "/score/user/:username" => updates the score of already existing users if conditions are met.

delete at "/places/:country" => deletes the country from the quiz.json file.