var express = require('express');
var router = express.Router();
var Users=require("../respositories/users.js");
const { User } = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
res.send(await Users.getAllUsers())
});

router.get('/users',async (req, res) => {
  console.log("huu2");
  const {offset,limit}=req.params;
  res.send(await Users.getUsers(offset,limit))
});
router.get('/:id',async (req, res)=>{
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id : id },
          
        });
        
            res.send( res.status(200).json({ user }));
        
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
router.post('/users',async (req, res) =>
{
  const user = await User.create(req.body);
  return res.status(201).json({user});
});
router.put('/users',async (req, res)=>
{
  const {id}=req.params;
  res.status(200).json(Users.updateUser(id));
});
router.delete('/delete:id',async (req, res)=>
{
  console.log("here");
  const {id}=req.params;
  res.send("here");
});
router.delete('/',async (req, res)=>
{
  console.log("here");
  const {id}=req.params;
  res.send("here");
});

module.exports = router;
