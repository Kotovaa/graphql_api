import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} from 'graphql';

import clubType from '../../types/club';
import ClubModel from '../../../models/club';

export default {
    type: clubType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const updateClub = ClubModel.findByIdAndUpdate(params.id, {
            $set: {
                name: params.name
            }
        }, {
            new: true
        })
        if (!updateClub) {
            throw new Error('error update club')
        }

        return updateClub;
    }
}