export default class TodoApi {
  async serviceRequest(route, method = 'GET', body = {}, param = '') {
    let settings = {
      method
    };

    if (method === 'POST') settings.body = body;

    const serviceUrl = `http://localhost:3005/api/${route}/${param}`;
    const serviceResponse = await fetch(serviceUrl, settings);
    const responseJson = await serviceResponse.json();

    if (!serviceResponse.ok) {
      throw new Error('Something went wrong.');
    }

    return responseJson;
  }

  addTodo(item = 'Hello') {
    const newItem = this.serviceRequest('todos/add', 'POST', item);

    return newItem;
  }
}