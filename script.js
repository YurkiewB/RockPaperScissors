 console.log("Hello lets play!")//Hello.
//overall, rps runs the complete game.

function rockPaperScissors(){ 
    //makes sure the user inputs either rock,paper,or scissors. 
        function myPlay(){ 
                if (user === "rock"||button==="paper"||user==="scissors") {
                console.log("user played "+ user )
    }           else {
       console.log( "You didn't make the right selection" );
        }
    }
    myPlay()

        const moves=["rock","paper","scissors"]//defines cpu moveset
        let cpu=moves[Math.floor(Math.random()* moves.length)]//radomizes cpu moveset
        function computerPlay(){//reports to the console what comp plays
                console.log("computer played "+ cpu)
    }
        computerPlay()

        function game(){//game conditionals comparing user to cpu. determines winner
        if (user === cpu){
            console.log("You and the computer played the same move, go again.");
    }   else if (user==="rock" && cpu==="scissors" ){
            console.log("You played Rock, Computer played Scissors: You win! Good job, test your luck agian? refresh.");
    }   else if (user==="scissors" && cpu==="rock"){
            console.log("You played Scissors, Computer played rock: You loose! Try again. Refresh.");
    }   else if (user==="paper" && cpu==="rock"){
            console.log("You played Paper, Computer played Rock: You win! Good job, test your luck agian? refresh.");
    }   else if (user==="rock" && cpu==="paper"){
            console.log("You played Rock, Computer played Paper: You loose! Try again. Refresh.");
    }   else if (user==="scissors" && cpu==="paper"){
            console.log("You played Scissors, Computer played Paper: You win! Good job, test your luck agian? refresh.")
    }   else if (user==="paper" && cpu==="scissors"){
            console.log("You played Paper, Computer played Scissors: You loose! Try again. Refresh.")
        }
    }
    game()


}
//rockPaperScissors()
//retiterates the games multple times!
//for (let i = 0; i < 5; i++){
//    rockPaperScissors()
