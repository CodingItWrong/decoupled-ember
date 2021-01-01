import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';
import Todos from 'decoupled-frontend/lib/todos';
import axios from 'axios';
import RestTodosClient from 'decoupled-frontend/lib/todos/client/rest';

export default class TodosService extends Service {
  @tracked records = [];

  constructor() {
    super();
    this.todos = new Todos(
      new RestTodosClient(axios.create({baseURL: 'http://localhost:3000'})),
    );
  }

  async loadAll() {
    await this.todos.loadAll();
    this.records = this.todos.all;
    return this.records;
  }

  get all() {
    return this.records;
  }
}
