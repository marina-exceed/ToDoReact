export default class TodoApi {
  async serviceRequest(route, method = 'GET', body = {}, param = '') {
    let settings = {
      method
    };

    if (method === 'POST' || method === 'PUT') settings.body = JSON.stringify(body);

    const serviceUrl = `http://localhost:3005/api/${route}/${param}`;
    const serviceResponse = await fetch(serviceUrl, settings);
    const responseJson = await serviceResponse.json();

    if (!serviceResponse.ok) {
      throw new Error('Something went wrong.');
    }

    return responseJson;
  }

  async addTodo(item) {
    const newItem = await this.serviceRequest('todos/add', 'POST', item);

    return newItem;
  }

  async getAllItems() {
    const newItems = await this.serviceRequest('todos', 'GET');

    return newItems;
  }

  deleteTodo(id) {
    this.serviceRequest('todos/del', 'DELETE', {}, id);
  }

  async updateTodo(item) {
    const updatedItem = await this.serviceRequest('todos/up', 'PUT', item);

    return updatedItem;
  }

  async registration(user) {
    const response = this.serviceRequest('auth/registration', 'POST', user);

    return response;
  }
  async login(user) {
    const enterlog = this.serviceRequest('auth/enterlogin', 'POST', user);

    return enterlog;
  }

}