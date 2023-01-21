const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let secretNumber = Math.random(1, 10)

  function checkGuess(num){
    if(num > secretNumber){
      console.log('Too high.')
      return false
    }
    else if(num < secretNumber){
      console.log('Too low.')
      return false
    }
    else{
      console.log('Correct!')
      return true
    }
  }

  function askGuess(){
    rl.question("Enter a guess: ", (answer) => {
      let convertedAnswer = Number(answer)

      if (secretNumber === convertedAnswer){
        checkGuess(convertedAnswer)
        console.log("You Win!")

      }
      else{
          askGuess();
          checkGuess(convertedAnswer)
      }

      rl.close
      })

  }

  askGuess()
