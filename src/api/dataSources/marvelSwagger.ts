import _ from 'lodash';
import crypto from 'crypto';
import SwaggerClient from 'swagger-client';
import pojoDefinition from '../external/marvel_fixed.json';
//@TODO move to a datasource class

export default class marvelSwaggerAPI {
  privateKey: string;
  publicKey: string;
  baseURL: string;
  constructor() {
    this.baseURL = 'https://gateway.marvel.com/v1/public/';
    this.publicKey = _.get(process.env, 'MARVEL_API_PUBLIC_KEY', '');
    this.privateKey = _.get(process.env, 'MARVEL_API_PRIVATE_KEY', '');
    //console.log(this, process.env);
  }

  async getClient() {
    const requestInterceptor = (request: any) => {
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
}
