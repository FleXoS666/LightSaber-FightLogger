console.log('start app');


document.addEventListener('deviceready', function(event){
// initDB();
// initTable();

console.log('device is ready');
var btn1= document.querySelector(".add1");
var btn2= document.querySelector(".add2");
var scoreDisplay= document.querySelector(".score");

var score=0;
btn1.addEventListener("click", function(){
    console.log('j ai cliqué sur 1');
    score++;
    scoreDisplay.innerHTML= score;
    addPoints(score);
});

btn2.addEventListener("click", function(){
    console.log('j ai cliqué sur 2');
    score = score+2
    scoreDisplay.innerHTML= score;
    addPoints(score);
});


});
