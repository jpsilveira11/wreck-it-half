const state={

    view:{
        squares:document.querySelectorAll(".square"),
        target:document.querySelector(".target"),
        time:document.querySelector("#time"),
        score:document.querySelector("#score"),
        lifes:document.querySelector("#lifes"),
    },
    values:{
        // gameSpeed:1100,
        hitPosition:0,
        result:0,
        currentTime:60,
    },
    actions:{
        timer:setInterval(setTarget,1100),
        countdown:setInterval(countdown,1000),
        lifes:3,
    }

};

function lostALife(){
    if(state.actions.lifes>0) {
        state.actions.lifes--;
        state.view.lifes.textContent=`x${state.actions.lifes}`;    
    }
    else postGameAlert();
}

function soundEffect(audioID){
    let audio = new Audio(`./src/audios/${audioID}.m4a`);
    audio.volume=0.2;
    audio.play();
}

function countdown(){
    state.values.currentTime--;
    if(state.values.currentTime<=0){
        clearInterval(state.actions.countdown);
        clearInterval(state.actions.timer);
        postGameAlert();
    }
    state.view.time.textContent=state.values.currentTime;
}

function setTarget(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("target");
    })
    let randomNumber=Math.floor(Math.random()*9);
    let randomSquare=state.view.squares[randomNumber];
    randomSquare.classList.add("target");
    state.values.hitPosition=randomSquare.id;
}
// function moveTarget(){
//     state.values.timer=setInterval(setTarget,state.values.gameSpeed);
// }

function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>{
            if(square.id===state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent=state.values.result;
                state.values.hitPosition=null;
                soundEffect('hit');
            }
            else lostALife();
        })
    })
}
function reset() {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    state.values.currentTime = 60;
    state.actions.lifes = 3;
    state.values.result = 0;
    state.view.time.textContent =state.values.currentTime;
    // state.view.score.textContent=state.values.result;
    // state.view.lifes.textContent=`x${state.actions.lifes}`;
    state.view.squares.forEach((square) => {
        square.removeEventListener("mousedown");
    });
}

function runEngine(){
    // alert("running.");
    if(state.view.score.textContent==='x') state.view.score.textContent=state.values.result;
    if(state.view.lifes.textContent==='xX') state.view.lifes.textContent=`x${state.actions.lifes}`;
    // moveTarget();
    addListenerHitBox();
}

function newGame() {
    reset();
    state.actions.countDownTimerId = setInterval(countDown, 1000);
    runEngine();
}



function postGameAlert(){
    alert(`Game Over!\nFinal Score: ${state.values.result}`);
    alert('Press "OK" to start a new game.')
    reset();
    newGame();
}

runEngine();