import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const clubType = new GraphQLObjectType({
    name: 'Club',
    description: 'Club type',
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString
        },
        position: {
            type: GraphQLString
        },
        league: {
            type: GraphQLString
        },
        createdAp: {
            type: GraphQLDate
        },
        updateAt: {
            type: GraphQLDate
        }
    })
});

export const clubInputType = new GraphQLInputObjectType({
    name: 'ClubInput',
    description: 'Club input type',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        position: {
            type: GraphQLString
        },
        league: {
            type: GraphQLString
        }
    })
})