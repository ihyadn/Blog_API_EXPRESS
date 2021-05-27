var express = require('express');
var router = express.Router();
var Users=require("../respositories/users.js");
/* GET users listing. */
router.get('/', async function(req, res, next) {
res.send(await Users.getAllUsers())
});

router.get('/users',async (req, res) => {
  const {offset,limit}=req.params;
  res.send(await Users.getUsers(offset,limit))
});
router.get('/users/:id',async (req, res) =>
{
  const {id}=req.params;
  res.status(200).json(Users.getById(id));
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
router.delete('/users/:id',Users.deleteUser);

module.exports = router;
