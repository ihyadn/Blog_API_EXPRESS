const { User,Article } = require('../models');

module.exports = {
    getAllUsers() {
return User.findAll()
},
// méthodes à implémenter
getArticlesById(id)
{
    return Article.findAll({
        
        where:{UserId:id}
    })
},
getUsers(offset = 0, limit = 10) {
    return User.findAll(
        {
            offset: offset,
            limit: limit
        }
    )
 },
getAdmins() { 
    try {
        const admins = User.findAll({
            where: { role: "admin" },
            
        });
        if (admins) {
            return res.status(200).json({ admins });
        }
        return res.status(404).send('There are no admins');
    } catch (error) {
        return res.status(500).send(error.message);
    }
},
getAuthors() {
    try {
        const authors = User.findAll({
            where: { role: "author" },
            
        });
        if (admins) {
            return res.status(200).json({ authors });
        }
        return res.status(404).send('There are no admins');
    } catch (error) {
        return res.status(500).send(error.message);
    }
 },
getGuests(){ 
    try {
        const guests = User.findAll({
            where: { role: "guest" },
            
        });
        if (admins) {
            return res.status(200).json({ guests });
        }
        return res.status(404).send('There are no admins');
    } catch (error) {
        return res.status(500).send(error.message);
    }
},

getUserByEmail(email) {
    try {
        
        const user = User.findOne({
            where: { email: email },
            include: [
                {
                    model: Project
                }
            ]
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified email does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
 },
addUser(user) { 
    try {
        return user;
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
},
updateUser(id) { 
    try {
        const [updated] =  User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = User.findOne({ where: { id: id } });
            return {users: updatedUser};
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
},
deleteUser(id){
    try {
        console.log("here");
        const deleted = User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return "User deleted";
        }
        throw new Error("User not found");
    } catch (error) {
        return error.message;
    }
},
}