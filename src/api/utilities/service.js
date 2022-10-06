import Service from './server';

const api = new Service('http://188.120.245.118', {
  apiPath: 'api/v2',
  timeout: 10000,
});

export default api;
