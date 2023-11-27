const state={

    view:{
        squares:document.querySelectorAll(".square"),
        target:document.querySelector(".target"),
        time:document.querySelector("#time"),
        score:document.querySelector("#score"),
        lifes:document.querySelector("#lifes"),
    },
    values:{
        timer:null,
        gameSpeed:1200,
        hitPosition:0,
        result:0,
    },

};

function setTarget(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("target");
    })
    let randomNumber=Math.floor(Math.random()*9);
    let randomSquare=state.view.squares[randomNumber];
    randomSquare.classList.add("target");
    state.values.hitPosition=randomSquare.id;
}
function moveTarget(){
    state.values.timer=setInterval(setTarget,state.values.gameSpeed);
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>{
            if(square.id===state.values.hitPosition){
                state.values.result++
                state.view.score=state.values.result;
                state.values.hitPosition=null;
            }
        })
    })
}

function runEngine(){
    // alert("running.");
    moveTarget();
    addListenerHitBox();
}

runEngine();