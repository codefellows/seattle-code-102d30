let userAnswer = prompt('Do you want to join the Empire?')
console.log(userAnswer)
if(userAnswer.toLowerCase() == 'yes'){
    let url = "https://i.ytimg.com/vi/fsiNs4rg8SA/maxresdefault.jpg"
    document.write('<img src="' + url + '">')
}