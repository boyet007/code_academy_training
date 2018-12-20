var userName = 'Bryan'
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!')
let userQuestion = 'Can you answer my question?'
console.log(`The user asked: ${userQuestion}`)
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break
    case 1:
    eightBall = 'Its decidedly so'
    break
    case 2:
    eightBall = 'Reply hazy tray again'
    break
    case 3:
    eightBall = 'Cannot predict now'
    break
    case 4:
    eightBall = 'Do not count on it'
    break
    case 5:
    eightBall = 'my sources say no'
    break
    case 6:
    eightBall = 'outlook not so good'
    break
    case 7:
    eightBall = 'signs point to yes'
    break
}

console.log(eightBall)