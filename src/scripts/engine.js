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
        lifes:3,
    },
    actions:{
        timer:setInterval(setTarget,1100),
        countdown:setInterval(countdown,1000),
    }

};

/*function gameOver(){
    alert("Game Over!");
}

function lostALife(){
    if(state.values.lifes>0) {
        state.values.lifes--;
        state.view.lifes.textContent=`x${state.values.lifes}`;    
    }
    else gameOver();
} */

function soundEffect(audio){
    let audio = new Audio(`./src/audios/${audio}.m4a`);
    audio.volume=0.2;
    audio.play();
}

function countdown(){
    state.values.currentTime--;
    if(state.values.currentTime<=0){
        clearInterval(state.actions.countdown);
        clearInterval(state.actions.timer);
        alert(`Game Over!\nFinal Score: ${state.values.result}`);
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
                // soundEffect(hit);
            }
        })
    })
}

function runEngine(){
    // alert("running.");
    if(state.view.score.textContent==='x') state.view.score.textContent='0';
    if(state.view.lifes.textContent==='xX') state.view.lifes.textContent='x3';
    // moveTarget();
    addListenerHitBox();
}

runEngine();