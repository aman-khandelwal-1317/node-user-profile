const mongoose = require("mongoose") ;
const FakeDB = require("./fakeDB") ;

mongoose.connect('mongodb://localhost:27017/UserDB',{
    useNewUrlParser : true ,
    useUnifiedTopology : true
  },async () => {
    const fakeDB = new FakeDB ;
    console.log("Starting Populating DB") ;
   await fakeDB.populate();
  await  mongoose.connection.close();
    console.log("DB has been populated .") ;
  });
