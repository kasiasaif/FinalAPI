const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new mongoose.Schema({
    tournamentname: {
        type: String,
        required: true,
        unique: true,
    },
    game: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    description: {
        type: String,
    },
    tags: [{
        type: String,
    }]
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;