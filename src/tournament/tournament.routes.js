const { Router } = require("express");
const { addTournament, searchTournament, addPlayer, removePlayer } = require("./tournament.controllers");
const tournamentRouter = Router();

tournamentRouter.post("/tournament", addTournament);
tournamentRouter.get("/tournament", searchTournament);
tournamentRouter.put("/tournament/add", addPlayer);
tournamentRouter.put("/tournament/remove", removePlayer);

module.exports = tournamentRouter;