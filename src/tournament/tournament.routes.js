const { Router } = require("express");
const { addTournament } = require("./tournament.controllers");
const tournamentRouter = Router();

tournamentRouter.post("/tournament", addTournament);

module.exports = tournamentRouter;