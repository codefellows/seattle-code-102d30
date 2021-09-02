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

function userGuessingGame(correctAnswer){
    userAnswer = prompt("Guess a number between 1 and 100");
    if(userAnswer == correctAnswer){
        alert('You got it right');
    } else {
        alert('Sorry, that answer is incorrect');
    }
}
