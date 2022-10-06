import api from './utilities/service';

const map = new Map();

async function cache(url, request) {
  if(!map.has(url)) {
    map.set(url, await request(url));
  };

  return map.get(url);
}

export async function list() {
  const url = 'anonymouses/articles';
  return cache(url, url => api.swot(url).json());
}

export function show(id) {
  const url = `anonymouses/articles/${id}`;
  return  cache(url, url => api.swot(url).json());
}
