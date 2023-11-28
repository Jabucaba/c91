var score=0;
function updateScore(){
    score=score+1;
    document.getElementById("score").innerHTML="pontuaçao : "+score;
}
function saveScore(){
    localStorage.setItem("score",score);
}
function maxtPage(){
    window.location="activity_1.html";
}