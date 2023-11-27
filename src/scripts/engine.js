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
        gameSpeed:1000,
    },

};

function setTarget(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("target");
    })
    let randomNumber=Math.floor(Math.random()*9);
    let randomSquare=state.view.squares[randomNumber];
    randomSquare.classList.add("target");
}
function moveTarget(){
    state.values.timer=setInterval(setTarget,state.values.gameSpeed);
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        //if(square.id===)
    })
}

function runEngine(){
    // alert("running.");
    moveTarget();
}

runEngine();