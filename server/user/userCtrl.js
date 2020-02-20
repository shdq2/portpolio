const db = require('./../database');
let id = 1;

const users = [
    {
        id:'test',
        title:'test',
        body:'test'
    }
]

exports.getUsers = ctx=>{      
    
    ctx.body = db.getUserList();
}