const { Router } = require("express");
const { addTournament, searchTournament, addPlayer, removePlayer, deleteTournament } = require("./tournament.controllers");
const tournamentRouter = Router();

tournamentRouter.post("/tournament", addTournament);
tournamentRouter.get("/tournament/searchKey/searchValue", searchTournament);
tournamentRouter.put("/tournament/add", addPlayer);
tournamentRouter.put("/tournament/remove", removePlayer);
tournamentRouter.delete("/tournament", deleteTournament);

module.exports = tournamentRouter;