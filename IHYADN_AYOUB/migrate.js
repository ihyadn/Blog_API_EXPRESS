const db = require('./models')
async function migrate() {
    try
    {
        await db.sequelize.sync({force: true})
        console.log("Done")
    }catch (error) {
        return res.status(500).send(error.message);
    }
}
migrate()
