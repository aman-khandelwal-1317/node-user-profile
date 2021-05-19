const mongoose = require("mongoose") ;

const user1Id = mongoose.Types.ObjectId() ;
const user2Id = mongoose.Types.ObjectId() ;

exports.users = [{
  _id : user1Id ,
  username : "Test User 1" ,
  email : "test1@example.com" ,
  contact : "777-777-7777"
},

  {
    _id : user2Id ,
    username : "Test User 2" ,
    email : "test2@example.com" ,
    contact : "888-888-8888"
  }
]