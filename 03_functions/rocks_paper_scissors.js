var userInput = 'Rock';
var userChoice = userInput.toLowerCase();

var computerChoice;
//console.log(randomNumber)


const determineWinner = (userChoice, computerChoice) => {
  
	if(userChoice === computerChoice) {
    return 'The game is a tie!'
  } 
  
  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won!'
    } else {
      return 'User won'
    }
  }
  
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer won!'
    } else {
      return 'User won'
    }
  }
  
 if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer won!'
    } else {
      return 'User won'
    }
  }
  
  if (userChoice === 'bomb') {
    return 'your destroy your opponent'
  }
}

const getUserChoice = (userChoice) => {
  return this.userChoice = userChoice
}



const getComputerChoice = () => { 
  let randomNumber = Math.floor(Math.random() * 3);
  
	switch (randomNumber) {
    case 0:
      //computerChoice = 'rock'
      return 'rock';
      break;
    case 1:
      //computerChoice = 'paper'
      return 'paper';
      break;
    case 2: 
      //computerChoice = 'scissors'
      return 'scissors';
      break;
  }
}


const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log('Your choice is: ' + userChoice)
  console.log('The compter choice: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

console.log(playGame())



//var computerChoice = randomNumber;
//console.log('Your choice is : ' + userChoice)
//console.log('COmputer Choice is : ' + computerChoice)

//console.log(determineWinner(userChoice, computerChoice))


