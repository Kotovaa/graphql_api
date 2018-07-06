import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import { clubType } from '../../types/club';
import ClubModel from '../../../models/club';

export default {
    type: clubType,
    args: {
        id: {
            name: 'id',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        return ClubModel.findById(params.id).exec();
    }
};