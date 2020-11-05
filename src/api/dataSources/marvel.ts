import { RESTDataSource } from 'apollo-datasource-rest';
import _ from 'lodash';
import crypto from 'crypto';
import SwaggerClient from 'swagger-client';
import pojoDefinition from '../external/marvel_fixed.json';
//const chars = await client.apis.default.characters();

export default class MarvelAPI extends RESTDataSource {
  privateKey: string;
  publicKey: string;
  baseURL: string;
  constructor() {
    super();
    this.baseURL = 'https://gateway.marvel.com/v1/public/';
    this.publicKey = _.get(process.env, 'MARVEL_API_PUBLIC_KEY', '');
    this.privateKey = _.get(process.env, 'MARVEL_API_PRIVATE_KEY', '');
  }

  async getClient() {
    const requestInterceptor = (request: any) => {
      //dataSources.marvelApi.authParams;
      const ts = new Date().getTime().toString();
      const url = new URL(request.url);
      url.searchParams.append('apikey', this.publicKey);
      url.searchParams.append('ts', ts);
      url.searchParams.append(
        'hash',
        crypto
          .createHash('md5')
          .update(String(ts) + this.privateKey + this.publicKey)
          .digest('hex')
      );
      request.url = url;
      return request;
    };
    return new SwaggerClient({
      requestInterceptor,
      spec: pojoDefinition,
      allowMetaPatches: false,
      skipNormalization: true,
    }).then((swaggerClient: any) => {
      return swaggerClient;
    });
  }

  async getCharacterById(id) {
    return this.get(`characters/${id}`);
  }

  willSendRequest(request) {
    const ts = new Date().getTime().toString();
    request.params.set('apikey', this.publicKey);
    request.params.set('ts', ts);
    request.params.set(
      'hash',
      crypto
        .createHash('md5')
        .update(String(ts) + this.privateKey + this.publicKey)
        .digest('hex')
    );
  }

  async getEntityByArgs(params) {
    return this.get(params.marvelEntity + 's', params.filters);
  }

  async getEntity(entityName, params) {
    return this.get(entityName, params);
  }
}
