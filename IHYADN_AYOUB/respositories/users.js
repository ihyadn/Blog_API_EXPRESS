const { User } = require('../models');
module.exports = {
    getAllUsers() {
return User.findAll()
},
// méthodes à implémenter
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
        const admins = await users.findAll({
            where: { role: "admin" },
            include: [
                {
                    model: Project
                }
            ]
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
        const authors = await users.findAll({
            where: { role: "author" },
            include: [
                {
                    model: Project
                }
            ]
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
        const guests = await users.findAll({
            where: { role: "guest" },
            include: [
                {
                    model: Project
                }
            ]
        });
        if (admins) {
            return res.status(200).json({ guests });
        }
        return res.status(404).send('There are no admins');
    } catch (error) {
        return res.status(500).send(error.message);
    }
},
getUser(id) { 
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id },
            include: [
                {
                    model: Project
                }
            ]
        });
        if (user) {
            return user;
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
},
getUserByEmail(email) {
    try {
        const { email } = req.params;
        const user = await User.findOne({
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
        const [updated] = await users.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await users.findOne({ where: { id: id } });
            return {users: updatedUser};
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
},
deleteUser(req, res){
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
},
}