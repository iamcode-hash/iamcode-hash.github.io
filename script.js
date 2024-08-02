let randomnumber = Math.floor(math.random() * 100) + 1;

function makeGuess() {
    const userGuess = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    if (userGuess == randomnumber){
      message.textContent = "good job";
      message.style.color = 'green';
       resetGame();
    }else if(userGuess >randomnumber){
    message.textContent = 'too high!';
    message.style.color = 'red';
    }else if(userGuess < randomnumber){
        message.textContent = 'low!';
        message.style.color = 'red';
     }
}
function resetGame(){
    randomnumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess-input').value ='';
}