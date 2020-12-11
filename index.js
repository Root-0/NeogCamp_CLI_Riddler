var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

// chalk styling
const error = chalk.bold.red;
const success = chalk.bold.green;
const warning = chalk.keyword('orange');

// Get Player name.
var userName = readlineSync.question('Player Name? ');
log(chalk.blueBright.bold('Hi ' + userName + '!'));

log('\n--------- '+ chalk.yellowBright.underline('WELCOME TO THE RIDDLER')+' -----------\n');

// setup list of questions
var questions = [
  {
    Ques: 'What is orange and sounds like a parrot?',
    Ans: 'Carrot'
  },
  {
    Ques: 'What word becomes shorter when you add two letters to it?',
    Ans: "Short"
  },
  {
    Ques: 'What gets wetter the more it dries?',
    Ans: 'Towel'
  },
  {
    Ques: 'Which word in the dictionary is spelled incorrectly?',
    Ans: 'Incorrectly'
  },
  {
    Ques: 'What grows when it eats, but dies when it drinks water?',
    Ans: 'Fire'
  },
  {
    Ques: "You can't keep this until you have given it.",
    Ans: 'Promise'
  },
  {
    Ques: 'What goes up and down but never moves?',
    Ans: 'Stairs'
  },
  {
    Ques: 'What runs but never walks?',
    Ans: 'Tap'
  },
  {
    Ques: 'What can you give a man with no hair that he will never part with?',
    Ans: 'Comb'
  },
  {
    Ques: 'Forwards I am heavy, backwards I am not. What am I?',
    Ans: 'Ton'
  },
  {
    Ques: 'Which word in the dictionary starts and finishes with the letter E, but only has one letter?',
    Ans: 'Envelope'
  },
  {
    Ques: "What is so unbelievably fragile that just by speaking it's name will break it?",
    Ans: 'Silence'
  },
  {
    Ques: 'What starts with a T, ends with a T and is full of T?',
    Ans: 'Teapot'
  },
  {
    Ques: 'What is that which man loves more than life, the poor have, the rich require; the miser spends, and all men carry to their graves?',
    Ans: 'Nothing'
  },
  {
    Ques: 'The more you take, the more you leave behind. What are they?',
    Ans: 'Footsteps'
  }
]

// quick tip
log(warning('Note: Total of 15 riddles, answer only in one word.\n'));

// init
var score = 0;

// loop through questions
for(let i = 0; i<questions.length; i++){
  let currentQuestion = questions[i].Ques;
  let currentAnswer = questions[i].Ans;
  var answer = readlineSync.question((i+1) + ". "+ currentQuestion + "\n Your Answer: " );

  if(currentAnswer.toUpperCase() == answer.toUpperCase()){
    score++;
    log(success("-> Correct (+1 point)\n"));
  }
  else{
    log(error("-> Wrong Answer"));
    log("-- Right Answer was ", chalk.underline.green(currentAnswer) + "\n");
  }
}

// display score at end
log(chalk.blue("You scored "+score+" points out of "+ questions.length));

// highscores record
var highscores = [
  {
    rank: 1,
    name: 'Nandu Sabka Bandu',
    points: '13'
  },
  {
    rank: 2,
    name: 'Totla Theth',
    points: '10'
  },
  {
    rank: 3,
    name: 'Pakchikpak Raja Babu',
    points: '7'
  },
  {
    rank: 4,
    name: 'Baandya',
    points: '3'
  }
]

// loop through highscores to check if player broke record
var rankPlayer = {
  rank: 0,
  beatOpponent: '',
}

for(let i = 0; i<highscores.length; i++){
  if(score > highscores[i].points){
    rankPlayer.rank = highscores[i].rank;
    rankPlayer.beatOpponent = highscores[i].name;
  }  
}

if(rankPlayer.rank > 0){
  log(chalk.greenBright("\nCongratulations! You broke "+rankPlayer.beatOpponent + "'s record and got "+ rankPlayer.rank + " rank."));
}