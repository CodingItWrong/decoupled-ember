import Service from '@ember/service';
import {A} from '@ember/array';
import {tracked} from '@glimmer/tracking';
import Todos from 'decoupled-frontend/lib/todos';
import axios from 'axios';
import RestTodosClient from 'decoupled-frontend/lib/todos/client/rest';

export default class TodosService extends Service {
  @tracked records = A([]);

  constructor() {
    super();
    this.todos = new Todos(
      new RestTodosClient(axios.create({baseURL: 'http://localhost:3000'})),
    );
  }

  async loadAll() {
    await this.todos.loadAll();
    this.records.setObjects(this.todos.all);
  }

  get all() {
    return this.records;
  }
}
