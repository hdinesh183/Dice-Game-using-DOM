var player1 = Math.floor(Math.random()*6+1);
var player2 = Math.floor(Math.random()*6+1);
var images=["./images/dice1.png", "./images/dice2.png", "./images/dice3.png",
    "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"
]

if(player1>player2){
    document.querySelector("h1").innerHTML="🚩Player-1 Won";
}else if(player1<player2){
    document.querySelector("h1").innerHTML="Player-2 Won 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

document.querySelector(".img1").setAttribute("src",images[player1-1]);
document.querySelector(".img2").setAttribute("src",images[player2-1]);

