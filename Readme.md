# User Profile Task
An example of how to create a user profile store with MongoDB and Node.js. The api shows how to add users in a database .
Made by : Aman Khandelwal

# Running the Application
With Node.js installed and the project downloaded, execute the following:

npm init
npm install
npm start
The application will be served  at http://localhost:3000 with a local mongoDB Database .

# To populate FakeDB

cd to /fakeDB from root of the project and run command : 
node cleanDB.js



# API Endpoints

# POST /users/create 

request_body: {
    "username": string,
    "email": string,
    "contact": string,
    "image": string
}


# GET /users


response: {
    [
         {
    "username": string,
    "email": string,
    "contact": string,
    "image": string
}
    ]
}


# GET /users/:userId



response:  {
    "username": string,
    "email": string,
    "contact": string,
    "image": string
}


# DELETE /users/:userId

response: Deleted User Data


# PATCH /users/:userId

request_body: {
    "username": string,
    "email": string,
    "contact": string,
    "image": string
}


# With updated data 

response : {
    "username": string,
    "email": string,
    "contact": string,
    "image": string
}

