var db = null;

function initDB(){


    if (window.cordova.platformId === 'browser') {
        db = window.openDatabase('matchLogger', '1.0', 'Data', 2*1024*1024);
        console.log("opening browser database");
    }
    else {
        db = window.sqlitePlugin.openDatabase({name: 'matchLogger.db', location: 'default'});
        console.log("opening mobile (plugin) database");
    }

}

function initTable(){

    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS matchLog (id INTEGER PRIMARY KEY, dateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP, score, teamId)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS team (id INTEGER PRIMARY KEY, name TEXT)');
    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Populated database OK');
    });
}

function convertDate(time){
    var time = new Date(time);
    var months_arr = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aou','Sep','Oct','Nov','Déc'];
    var day = time.getDate();
    var month = months_arr[time.getMonth()];
    var year = time.getFullYear();
    var hours = time.getHours();
    var minutes = "0" + time.getMinutes();
    var seconds = "0" + time.getSeconds();
    var convdataTime = day+'-'+month+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return convdataTime;
}

function addPoints(score,id){
    //  db ...
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO matchLog (dateTime,score,teamId) VALUES (?,?,?)', [Date.now(), score, id]);


        var baseElement= document.getElementById("historique");

        var lastScore = document.createElement('li'); // is a node
        lastScore.innerHTML = convertDate(Date.now()) +' : '+score+' pts pour le combattant '+id;
        baseElement.append(lastScore);

    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Populated database OK');
    });
}

function insertNewTeam(name){
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO team (name) VALUES (?)', [name]);
    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Populated database OK');
    });
}
function displayTeamList(){
    db.transaction(function(tx){
        tx.executeSql('SELECT id, name FROM team', [], function(tx, result) {
            var selectTeam1= document.querySelector(".selectTeam1");
            var selectTeam2= document.querySelector(".selectTeam2");

            for (var i = 0; i < result.rows.length; i++) {
                selectTeam1.innerHTML += '<option value="'+ result.rows.item(i).id +'">'+result.rows.item(i).name+'</option>';
                selectTeam2.innerHTML += '<option value="'+ result.rows.item(i).id +'">'+result.rows.item(i).name+'</option>';
                // var cloneElement= baseElement.cloneNode(true);
                // cloneElement.setAttribute("value", result.rows.item(i).id);
                // // cloneElement.querySelector(".name").innerHTML= result.rows.item(i).name;
                // console.log(result.rows.item(i).id);
                
            }
        });
    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Populated database OK');
    });
}


function DisplayScore(){
    db.transaction(function(tx){
        tx.executeSql('SELECT matchLog.id, matchLog.dateTime, matchLog.score, team.name FROM matchLog LEFT JOIN team ON matchLog.teamId=team.id', [], function(tx, result) {
            var baseElement= document.querySelector(".historique");

            for (var i = 0; i < result.rows.length; i++) {
                baseElement.removeAttribute("id");
                var time = result.rows.item(i).dateTime;
                var cloneElement= baseElement.cloneNode(true);
                cloneElement.querySelector(".date").innerHTML= convertDate(result.rows.item(i).dateTime);
                cloneElement.querySelector(".points").innerHTML= result.rows.item(i).score;
                cloneElement.querySelector(".team").innerHTML= result.rows.item(i).name;

                document.querySelector('.app').appendChild(cloneElement);
            }
        });
    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function() {
        console.log('Populated database OK');
    });
}



    //         console.log(result);
    //         console.log(result.rows);
    //         console.log(result.rows.item(0));
    //         console.log(result.rows.item(1));
    //     });
    // }, function(error) {
    //     console.log('Transaction ERROR: ' + error.message);
    // }, function() {
    //     console.log('Populated database OK');

