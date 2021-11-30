var compRandInt = Math.floor(Math.random() * 3);
var comp;
var resultHeader = document.getElementById('result');
var compChoice = document.getElementById('operator-img');
var resultBox = document.getElementById('resultBox');

if(compRandInt == 0){
    comp = 'ROCK';
}
else if(compRandInt == 1){
    comp = 'PAPER';
}
else{
    comp = 'SCISSORS';
}


function rockManager() {
    const me = 'ROCK';
    if(comp == me){
        compChoice.src = '/img/rock.png';
        resultBox.style.backgroundColor = 'lightyellow';
        resultHeader.innerHTML = 'TIED!';
    }
    else if(comp == 'PAPER' && me){
        compChoice.src = '/img/paper.png';
        resultBox.style.backgroundColor = 'lightcoral';
        resultHeader.innerHTML = 'DEFEAT!';
    }
    else{
        compChoice.src = '/img/scissors.png';
        resultBox.style.backgroundColor = 'lightgreen';
        resultHeader.innerHTML = 'VICTORY!';
    }
}

function paperManager() {
    const me = 'PAPER';
    if(comp == me){
        compChoice.src = '/img/paper.png';
        resultBox.style.backgroundColor = 'lightyellow';
        resultHeader.innerHTML = 'TIED!';
    }
    else if(comp == 'SCISSORS' && me){
        compChoice.src = '/img/scissors.png';
        resultBox.style.backgroundColor = 'lightcoral';
        resultHeader.innerHTML = 'DEFEAT!';
    }
    else{
        compChoice.src = '/img/rock.png';
        resultBox.style.backgroundColor = 'lightgreen';
        resultHeader.innerHTML = 'VICTORY!';
    }
    setTimeout(function(){location.reload()}, 3000)
}

function scissorsManager() {
    const me = 'SCISSORS';
    if(comp == me){
        document.getElementById('operator-img').src = '/img/scissors.png';
        resultBox.style.backgroundColor = 'lightyellow';
        resultHeader.innerHTML = 'TIED!';
    }
    else if(comp == 'ROCK' && me){
        document.getElementById('operator-img').src = '/img/rock.png';
        resultBox.style.backgroundColor = 'lightcoral';
        resultHeader.innerHTML = 'DEFEAT!';
    }
    else{
        document.getElementById('operator-img').src = '/img/paper.png';
        resultBox.style.backgroundColor = 'lightgreen';
        resultHeader.innerHTML = 'VICTORY!';
    }
}