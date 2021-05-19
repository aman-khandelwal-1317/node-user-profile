const express = require("express") ;
const mongoose = require("mongoose") ;
const usersRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000 ;


mongoose.connect('mongodb://localhost:27017/UserDB',{
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
    useCreateIndex : true
  },(err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("Connected to DB !!") ;
    }
   
  });


  


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.use("/users",usersRoutes); 

app.listen(PORT , () => {
    console.log("server is running on port 3000.") ;
  });

