import _ from "lodash";


let resolvers = {
    debug: async (parent, args, {dataSources}, info) => {
        return {
            parent,
            args,
            dataSources: _.keys(dataSources),
            info
        }
    },
    single_character_by_id: async (parent, args, {dataSources}, info) => {
        return dataSources.marvelApi.getCharacterById(args.characterId);
    }
}

const entityNames = ["characters","comics","creators","events"];

_.map(entityNames, entityName => {
    resolvers[entityName] = async (parent, args, {dataSources}, info) => {
        return dataSources.marvelApi.getEntity(entityName,args);
    };
})

module.exports = resolvers