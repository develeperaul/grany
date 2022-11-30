import Service from './server';

const api = new Service('https://app-service.grani-ufa.ru', {
  apiPath: 'api/v2',
  timeout: 10000,
});

export default api;
