export default class Todos {
  records = [];

  constructor(client) {
    this.client = client;
  }

  async loadAll() {
    const todos = await this.client.getAll();
    this.records = todos;
  }

  get all() {
    return this.records;
  }
}
