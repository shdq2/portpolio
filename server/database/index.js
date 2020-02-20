const mysql = require('mysql');

const client =mysql.createConnection({
        user:'testuser',
        password:'1234',
        database:'mainDB',
        host:'18.221.60.6',
        acquireTimeout: 1000000
    })


function GetUserList(){
    const client =mysql.createConnection({
        user:'testuser',
        password:'1234',
        database:'mainDB',
        host:'18.221.60.6',
        acquireTimeout: 1000000
    })
    client.connect(function(err){
        console.log(err);
    })
    // client.query("select * from mainDB.user_info",function(err,result){
    //     if(err) console.log(err);
    //     console.log(result);
    // })
}
module.exports = {
    getUserList:GetUserList
}
