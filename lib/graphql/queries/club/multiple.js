import { GraphQLList } from 'graphql';
import { clubType } from '../../types/club';
import ClubModel from '../../../models/club';

export default {
    type: new GraphQLList(clubType),
    resolve(root, params) {
        const clubs = ClubModel.find().exec();
        if (!clubs) {
            throw new Error('Error getting clubs')
        }

        return clubs;
    }
};