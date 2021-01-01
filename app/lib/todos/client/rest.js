export default class RestTodoClient {
  constructor(axios) {
    this.axios = axios;
  }

  async getAll() {
    const response = await this.axios.get('/todos');
    return response.data;
  }
}
