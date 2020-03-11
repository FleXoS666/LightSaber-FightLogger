console.log('start app');


document.addEventListener('deviceready', function(event){
    console.log('device is ready');
    var btn1= document.querySelector(".add1");
    var btn2= document.querySelector(".add2");
    var scoreDisplay= document.querySelector(".score");

    var score=0;
    btn1.addEventListener("click", function(){
        console.log('j ai cliqué sur 1');
        score++;
        scoreDisplay.innerHTML= score;
    });

    btn2.addEventListener("click", function(){
        console.log('j ai cliqué sur 2');
        score = score+2
        scoreDisplay.innerHTML= score;
    });


});

// var db = null;

// document.addEventListener('deviceready', function(event){

//     if (window.cordova.platformId === 'browser') {
//         db = window.openDatabase('matchLogger', '1.0', 'Data', 2*1024*1024);
//         console.log("opening browser database");
//     }
//     else {
//         db = window.sqlitePlugin.openDatabase({name: 'matchLogger.db', location: 'default'});
//         console.log("opening mobile (plugin) database");
//     }


//     //  db ...
//     // db.transaction(function(tx) {
//     //     tx.executeSql('CREATE TABLE IF NOT EXISTS matchLog (id, dateTime, score, teamId)');
//     //     tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
//     //     tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
//     // }, function(error) {
//     //     console.log('Transaction ERROR: ' + error.message);
//     // }, function() {
//     //     console.log('Populated database OK');
//     // });

//     // db.transaction(function(tx){
//     //     tx.executeSql('SELECT name, score FROM DemoTable LIMIT 3', [], function(tx, result) {

//     //         var baseElement= document.querySelector(".userScore");
//     //         for (var i = 0; i < result.rows.length; i++) {
//     //             var cloneElement= baseElement.cloneNode(true);


//     //             cloneElement.querySelector(".name").innerHTML= result.rows.item(i).name;
//     //             cloneElement.querySelector(".score").innerHTML= result.rows.item(i).score;

//     //             document.querySelector('.app').appendChild(cloneElement);
//     //         }


//     //         console.log(result);
//     //         console.log(result.rows);
//     //         console.log(result.rows.item(0));
//     //         console.log(result.rows.item(1));
//     //     });
//     // }, function(error) {
//     //     console.log('Transaction ERROR: ' + error.message);
//     // }, function() {
//     //     console.log('Populated database OK');

//     // });

// });