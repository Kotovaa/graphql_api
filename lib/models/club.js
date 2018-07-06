import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    league: {
        type: String,
        required: true
    },
    createdAp: Date,
    updateAt: Date
});

clubSchema.pre('save', function(next) {
    let currentDate = new Date();
    this.updateAt = currentDate;

    if (!this.createdAp) {
        this.createdAp = currentDate
    }

    next();
});

export default mongoose.model('clubs', clubSchema)