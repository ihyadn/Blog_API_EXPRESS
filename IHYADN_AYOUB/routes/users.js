var express = require('express');
var router = express.Router();
var Users=require("../respositories/users.js");
const { User } = require('../models');
const { authJwt,verifySignUp  } = require("../middleware");
const controller = require("../controllers/auth.controller");

/* GET users listing. */
router.get('/', async function(req, res, next) {
res.send(await Users.getAllUsers())
});
router.get('/users',[authJwt.verifyToken, authJwt.isAdmin],async (req, res) => {
  const {offset,limit}=req.params;
  return res.send(await Users.getUsers(offset,limit))
});
router.post('/users',[authJwt.verifyToken, authJwt.isAdmin],async (req, res) => {
  const {offset,limit}=req.params;
  return res.send(await Users.getUsers(offset,limit))
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

router.get('/:id/articles',async (req, res)=>
{
  const {id}=req.params;
  res.send(await Users.getArticlesById(id))
});
router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],

    controller.signup
  );

router.post("/signin", controller.signin);

module.exports = router;
