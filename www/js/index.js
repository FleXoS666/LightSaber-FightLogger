console.log('start app');


document.addEventListener('deviceready', function(event){

    initDB();
    initTable();
    DisplayScore();
    console.log('device is ready');

    var btnFormValid= document.querySelector(".formValid");


    btnFormValid.addEventListener("click", function(){
        var inputTeamName= document.querySelector(".teamName").value;
        console.log(inputTeamName);
        if (inputTeamName.length > 2) {
            console.log(inputTeamName);
            insertNewTeam(inputTeamName);
        }
    });


    var btn1A= document.querySelector(".add1A");
    var btn2A= document.querySelector(".add2A");
    var btn1B= document.querySelector(".add1B");
    var btn2B= document.querySelector(".add2B");

    var scoreADisplay= document.querySelector(".scoreA");
    var scoreBDisplay= document.querySelector(".scoreB");

    var scoreA=0;
    var scoreB=0;

    btn1A.addEventListener("click", function(){
        console.log('j ai cliqué sur 1');
        scoreA++;
        scoreADisplay.innerHTML= scoreA;
        idTeam=1;
        addPoints(scoreA,idTeam);
    });

    btn2A.addEventListener("click", function(){
        console.log('j ai cliqué sur 2');
        scoreA = scoreA+2
        scoreADisplay.innerHTML= scoreA;
        idTeam=1;
        addPoints(scoreA,idTeam);
    });

    btn1B.addEventListener("click", function(){
        console.log('j ai cliqué sur 1');
        scoreB++;
        scoreBDisplay.innerHTML= scoreB;
        idTeam=2;
        addPoints(scoreB,idTeam);
    });

    btn2B.addEventListener("click", function(){
        console.log('j ai cliqué sur 2');
        scoreB = scoreB+2
        scoreBDisplay.innerHTML= scoreB;
        idTeam=2;
        addPoints(scoreB,idTeam);
    });


});
