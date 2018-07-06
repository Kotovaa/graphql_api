import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import GraphQLDate from 'graphql-date';

export const playerType = new GraphQLObjectType({
    name: 'Player',
    description: 'Player type',
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString
        },
        club: {
            type: GraphQLString
        },
        position: {
            type: GraphQLString
        },
        nationality: {
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

export const playerInputType = new GraphQLInputObjectType({
    name: 'PlayerInput',
    description: 'Player input type',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        club: {
            type: GraphQLString
        },
        position: {
            type: GraphQLString
        },
        nationality: {
            type: GraphQLString
        }
    })
})