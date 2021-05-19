const User = require("../models/user") ;

exports.createUser = (req , res) => {
    const { email , username , contact , image } = req.body ;

    if( !email || !username || !contact) {
         return res.status(422).send({errors : [{title : "Missing Data !!",detail : "Email , username and Contact is required . "}]}) ;
     }

   
    User.findOne({email: email}, (error , existingUser) => {
        if(error) {
         return res.mongoError(error) ;
        }
 
        if(existingUser) {
         return res.status(422).send({errors : [{title : "Invalid Email !!",detail : "User Already Exists !! "}]}) ;
        }
       
           const user = new User({username , email , contact , image});
          
           user.save((error) => {
         
            if(error) {
                return res.status(422).send({errors : [{title : "DB Error 1!!",detail : error}]}) ;
            }

            return res.status(200).send("User Successfully Created !!") ;

        })

})

}

exports.getUsers = (req , res) => {

    User.find({}, (error , users) => {

        if(error) {
            return res.status(422).send({errors : [{title : "DB Error !!",detail : "Users  do not exist !!"}]}) ;
        }

        return res.json(users);



    })
}


exports.getUserById =  (req , res) => {
    const { userId } = req.params ;
   
      User.findOne({_id : userId} , (error , foundUser) => {
      if(error){
        return res.status(422).send({errors : [{title : "DB Error !!",detail : "User with this id does not exist!!"}]}) ;
      }
      return res.json(foundUser);
     })
     }


exports.deleteUser = (req, res) => {
    const { userId } = req.params ;

    User.findByIdAndRemove(userId,
         (error, deletedUser) => {
if (error){
    return res.status(422).send({errors : [{title : "DB Error !!",detail : "Some error occured . Try again !!"}]}) ;
}

if(!deletedUser) {
    return res.json("User with id : " + userId +  " does not exist !! " )  ;   
}

return res.json("User with id : " + deletedUser._id +  " was removed successfully ." )  ;   

});
}


exports.updateUser = (req , res) => {
    const { userId } = req.params ;

    User.findByIdAndUpdate(userId, { $set: req.body }, { new: true , runValidators : true },  (error, updatedUser) => {
        if (error){
            return res.status(422).send({errors : [{title : "DB Error !!",detail : error}]}) ;
        }

        if(!updatedUser) {
            return res.json("User with id : " + userId +  " does not exist !! " )  ;   
        }



        return res.json("User details after successful updation : " +  updatedUser )  ;  
        
    
    }); 

}