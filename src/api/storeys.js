import api from './utilities/service';

export function show(id) {
  return api.swot(`dwellings/storeys/${id}`, { meta: { cache: true } }).json();
}
