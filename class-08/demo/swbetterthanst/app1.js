// console.log('hello sw world!')

// String
// let stringVariable = 'SW Rocks'

// Int / number
// let numberVariable = 8

// Boolean
// let boolearVariable = true

// stringVariable = 'ST does not rock!'

// console.log(stringVariable)

function getUserName(){
    let userName = prompt('Please Enter your Name: ');

    if(userName == 'Roger'){
        document.write('Welcome Lord ' + userName);
    } else {
        document.write(userName);
    }
}

function joinTheEmpire(){
    let userAnswer = prompt('Do you want to join the Empire?');
    console.log(userAnswer);
    if(userAnswer.toLowerCase() == 'yes'){
        let url = "https://i.ytimg.com/vi/fsiNs4rg8SA/maxresdefault.jpg";
        document.write('<img src="' + url + '">');
    } 
}

function randomNumberGenerator(){
    // Got the folowing code from W3 Schools
    // https://www.w3schools.com/js/js_random.asp
    let correctAnswer = Math.floor(Math.random() * 100) +1;
    return correctAnswer;
}

// validate that the user enters a number > 0 and <= 100

// check if the user guess is higher or lower than the correct answer

// limit how many the user can guess


function userGuessingGame(correctAnswer){
    let wannaPlay = prompt('Do you want to play a game? (yes or no)');
    console.log(wannaPlay)
    while (wannaPlay.toLowerCase() == 'yes'){
        let numberOfAttempts = 8;
        for(let i = 1; i <= numberOfAttempts; i++){
            userAnswer = prompt("Guess a number between 1 and 100");
    
            while((userAnswer < 1) || (userAnswer > 100)){
                userAnswer = prompt("Guess a number between 1 and 100");
            }
            if(userAnswer == correctAnswer){
                alert('You got it right. You have ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } else if(userAnswer < correctAnswer){
                alert('Your answer is to low.  Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');  
            } else if (userAnswer > correctAnswer){
                alert('Your answer is to high.  Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');
            }
        }
        wannaPlay = prompt('Do you want to play a game? (yes or no)');
        if (wannaPlay == 'yes'){
            correctAnswer = randomNumberGenerator();
        }
    }
}
