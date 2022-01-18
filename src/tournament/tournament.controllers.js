const Tournament = require("./tournament.model");

exports.addTournament = async (req, res) => {
    try {
        const tournament = await Tournament.create(req.body);
        res.status(200).send({ tournament });
    } catch (error) {
        console.log(error);
    }
};