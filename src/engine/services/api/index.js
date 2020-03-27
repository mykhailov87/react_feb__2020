// Core
import axios from 'axios';

class Api {
  constructor() {
    this.http = axios.create({ baseURL: 'http://localhost:3000' }); // TODO: add your server baseURL

    this.getTodoListData = this.getTodoListData.bind(this)
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

  getTodoListData() {
    return this.http.get('/posts')
  }

  // TODO: add your own api methods here
}

export default Api.getInstance();
