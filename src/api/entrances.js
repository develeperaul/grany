import api from './utilities/service';

export function show(id) {
  return api.swot(`dwellings/entrances/${id}`, { meta: { cache: true } }).json();
}
