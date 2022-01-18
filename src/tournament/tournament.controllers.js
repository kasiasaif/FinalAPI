const Tournament = require("./tournament.model");

exports.addTournament = async (req, res) => {
    try {
        const tournament = await Tournament.create(req.body);
        res.status(200).send({ tournament });
    } catch (error) {
        console.log(error);
    }
};

exports.searchTournament = async (req, res) => {
    try {
        const tournament = await Tournament.find({[req.body.searchKey]: req.body.searchValue});
        res.status(200).send({message:"Success", tournament});
    } catch (error) {
        console.log(error);
    }
};

exports.addPlayer = async (req, res) => {
    try {
        let playerList = await Tournament.findOne({tournamentName: req.body.tournamentName});
        console.log(playerList);
        playerList = playerList.players;
        playerList.push(req.body.user);
        const tournament = await Tournament.updateOne({tournamentName: req.body.tournamentName}, {$set: {players: playerList}});
        res.status(200).send({message:"Success", tournament});
    } catch (error) {
        console.log(error);
    }
};

exports.removePlayer = async (req, res) => {
    try {
        const index = (element) => element === req.body.user;
        let playerList = await Tournament.findOne({tournamentName: req.body.tournamentName});
        playerList = playerList.players;
        playerList.splice(playerList.findIndex(index), 1);
        const tournament = await Tournament.updateOne({tournamentName: req.body.tournamentName}, {$set: {players: playerList}});
        res.status(200).send({message:"Success", tournament});
    } catch (error) {
        console.log(error);
    }
};