console.log('start app');

document.addEventListener('deviceready', function(event){

    initDB();
    initTable();
    DisplayScore();
    displayTeamList();
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

//  Selection du combattant 1 et affichage de son nom
var liste1 = document.getElementById("selectTeam1");
liste1.addEventListener("change", function(){
    var scoreA=0;
    var nomCombattant1 = document.querySelector(".teamAName");
    var idTeamA = liste1.options[liste1.selectedIndex].value;
    var texteA = liste1.options[liste1.selectedIndex].text;
    
    console.log(idTeamA);
    nomCombattant1.innerHTML = texteA;

    var btn1A= document.querySelector(".add1A");
    var btn2A= document.querySelector(".add2A");
    var scoreADisplay= document.querySelector(".scoreA");
    scoreADisplay.innerHTML = scoreA;
    btn1A.addEventListener("click", function(){
        console.log('j ai cliqué sur 1');
        scoreA++;
        scoreADisplay.innerHTML= scoreA;

        addPoints(scoreA,idTeamA,texteA);
    });

    btn2A.addEventListener("click", function(){
        console.log('j ai cliqué sur 2');
        scoreA = scoreA+2
        scoreADisplay.innerHTML= scoreA;
        
        addPoints(scoreA,idTeamA,texteA);
    });
});

//  Selection du combattant 2 et affichage de son nom
var liste2 = document.getElementById("selectTeam2");
liste2.addEventListener("change", function(){
    var scoreB=0;
    var nomCombattant2 = document.querySelector(".teamBName");
    var idTeamB = liste2.options[liste2.selectedIndex].value;
    var texteB = liste2.options[liste2.selectedIndex].text;

    console.log(idTeamB);
    nomCombattant2.innerHTML = texteB;

    var btn1B= document.querySelector(".add1B");
    var btn2B= document.querySelector(".add2B");
    var scoreBDisplay= document.querySelector(".scoreB");
    scoreBDisplay.innerHTML = scoreB;
    btn1B.addEventListener("click", function(){
        console.log('j ai cliqué sur 1');
        scoreB++;
        scoreBDisplay.innerHTML= scoreB;
        
        addPoints(scoreB,idTeamB,texteB);
    });

    btn2B.addEventListener("click", function(){
        console.log('j ai cliqué sur 2');
        scoreB = scoreB+2
        scoreBDisplay.innerHTML= scoreB;

        addPoints(scoreB,idTeamB,texteB);
    });
});


// var btn1B= document.querySelector(".add1B");
// var btn2B= document.querySelector(".add2B");
// var scoreBDisplay= document.querySelector(".scoreB");
// var scoreB=0;



// btn1B.addEventListener("click", function(){
//     console.log('j ai cliqué sur 1');
//     scoreB++;
//     scoreBDisplay.innerHTML= scoreB;
//     idTeam=2;
//     addPoints(scoreB,idTeam);
// });

// btn2B.addEventListener("click", function(){
//     console.log('j ai cliqué sur 2');
//     scoreB = scoreB+2
//     scoreBDisplay.innerHTML= scoreB;
//     idTeam=2;
//     addPoints(scoreB,idTeam);
// });


});
