const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let secretNumber = 0
  let numAttempts = 5

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
    rl.question("Enter a guess: ", guess)

      function guess(answer){
        let convertedAnswer = Number(answer)

        if (secretNumber === convertedAnswer){
          checkGuess(convertedAnswer)
          console.log("You Win!")
          rl.close()
        }
        else if(numAttempts === 0){
          console.log("Max turns reached.  YOU LOSE!" + ` Secret number was ${secretNumber}`)
          rl.close()
        }
        else {
          numAttempts-=1
          checkGuess(convertedAnswer)
          askGuess();

        }
        rl.close
        }

  }

  let askRange = () =>{
          let maxNum = 0
          let minNum = 0

          rl.question("Enter a max number:", response)

          function response(maxAnswer) {
            maxNum = maxAnswer

            rl.question("Enter a min number:", response2)
          }


          function response2(answer2){
              minNum = answer2

              console.log(`I'm thinking of a number between ${minNum} and ${maxNum}...`)
              secretNumber = randomInRange(minNum, maxNum)
              askGuess()

              rl.close
          }

  }


  function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  askRange()
