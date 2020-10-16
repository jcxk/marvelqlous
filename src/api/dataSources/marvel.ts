const {RESTDataSource} = require('apollo-datasource-rest');
import _ from "lodash";
import crypto from "crypto";

class MarvelAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://gateway.marvel.com/v1/public/';
        this.publicKey = _.get(process.env, "MARVEL_API_PUBLIC_KEY", false);
        this.privateKey = _.get(process.env, "MARVEL_API_PRIVATE_KEY", false);

    }

    async getCharacterById(id) {
        return this.get(`characters/${id}`);
    }

    willSendRequest(request) {

        const ts = new Date().getTime().toString();
        request.params.set('apikey', this.publicKey);
        request.params.set('ts', ts);
        request.params.set('hash', crypto.createHash('md5').update(String(ts) + this.privateKey + this.publicKey).digest('hex'));
    }

    async getEntity(entityName, params) {
        return this.get(entityName,  params);
    }


}

module.exports = MarvelAPI;
