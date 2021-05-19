
const express = require("express") ;
const router = express.Router() ;
const {
  createUser, getUsers, getUserById, deleteUser, updateUser
} = require("../controllers/users") ;

router.post('/create',createUser);
router.get('/',getUsers);
router.get('/:userId',getUserById);
router.delete('/:userId',deleteUser);
router.patch('/:userId',updateUser);

module.exports = router ;
