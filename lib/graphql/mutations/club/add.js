import { GraphQLNonNull } from 'graphql';
import {
    clubType,
    clubInputType
} from '../../types/club';
import ClubModel from '../../../models/club';

export default {
    type: clubType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(clubInputType)
        }
    },
    resolve(root, params) {
        const clubModel = new ClubModel(params.data);
        const newClub = clubModel.save();

        if (!newClub) {
            throw new Error('cannot create new Club')
        }
        return newClub;
    }
};