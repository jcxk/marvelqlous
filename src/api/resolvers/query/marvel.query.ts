import _ from "lodash";


let resolvers = {
    list: async (parent, args, {dataSources}, info) => {
        const response =  await  dataSources.marvelApi.getEntityByArgs(args);

        return {

            results: _.get(response,"data.results", []),
            pagination: {
                ..._.pick(_.get(response,"data", {}), ["count","limit","offset","total"])
            }
        }
    },

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