import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import { clubType } from '../../types/club';
import ClubModel from '../../../models/club';

export default {
    type: clubType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedClub = ClubModel.findByIdAndRemove(params.id).exec();
        if (!removedClub) {
            throw new Error('Cannot remove Club');
        }

        return removedClub;
    }
};

