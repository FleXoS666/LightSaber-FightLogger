 function addPoints(score){
     var db = null;

     if (window.cordova.platformId === 'browser') {
         db = window.openDatabase('matchLogger', '1.0', 'Data', 2*1024*1024);
         console.log("opening browser database");
     }
     else {
         db = window.sqlitePlugin.openDatabase({name: 'matchLogger.db', location: 'default'});
         console.log("opening mobile (plugin) database");
     }


    //  db ...
    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS matchLog (id INTEGER PRIMARY KEY, dateTime, score, teamId)');
        tx.executeSql('INSERT INTO matchLog (dateTime,score,teamId) VALUES (?,?,?)', ["21-12-2012", score, 1]);
    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Populated database OK');
    });
}

    // db.transaction(function(tx){
    //     tx.executeSql('SELECT name, score FROM DemoTable LIMIT 3', [], function(tx, result) {

    //         var baseElement= document.querySelector(".userScore");
    //         for (var i = 0; i < result.rows.length; i++) {
    //             var cloneElement= baseElement.cloneNode(true);


    //             cloneElement.querySelector(".name").innerHTML= result.rows.item(i).name;
    //             cloneElement.querySelector(".score").innerHTML= result.rows.item(i).score;

    //             document.querySelector('.app').appendChild(cloneElement);
    //         }


    //         console.log(result);
    //         console.log(result.rows);
    //         console.log(result.rows.item(0));
    //         console.log(result.rows.item(1));
    //     });
    // }, function(error) {
    //     console.log('Transaction ERROR: ' + error.message);
    // }, function() {
    //     console.log('Populated database OK');

