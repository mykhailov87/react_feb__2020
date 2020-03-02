// Core
import axios from 'axios';

class Api {
  constructor() {
    this.http = axios.create({ baseURL: '' }); // TODO: add your server baseURL
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  exampleGetRequest() {
    // TODO: remove that. this an example of your own api method.
    return this.http.get('/my-path');
  }

  // TODO: add your own api methods here
}

export default Api.getInstance();
