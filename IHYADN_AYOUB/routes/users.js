var express = require('express');
var router = express.Router();
var Users=require("../respositories/users.js");
const { User } = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
res.send(await Users.getAllUsers())
});
router.get('/users',async (req, res) => {
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
router.post('/users',async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});
router.put('/users',async (req, res) => {
    try {
        const id = req.body.id;
        const [updated] = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
router.delete('/:id',async (req, res)=>
{
  const {id}=req.params;
  res.send(Users.deleteUser(id));
});


module.exports = router;
