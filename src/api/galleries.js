import api from './utilities/service';

export function show(id) {
  return api.swot(`galleries/${id}`, { meta: { cache: true } }).json();
}

export function mixedList() {
  return api.swot(`mixed_galleries`, { meta: { cache: true } }).json();
}

export function showMixed(id) {
  return api.swot(`mixed_galleries/${id}`, { meta: { cache: true } }).json();
}
