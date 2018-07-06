import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    createdAp: Date,
    updateAt: Date
});

playerSchema.pre('save', function(next) {
    let currentDate = new Date();
    this.updateAt = currentDate;

    if (!this.createdAp) {
        this.createdAp = currentDate
    }

    next();
});

export default mongoose.model('players', playerSchema)