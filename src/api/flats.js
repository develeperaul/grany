import api from './utilities/service';

export async function list(searchParams = {}) {
  return api.swot('flats', {
    searchParams,
    meta: { cache: Object.keys(searchParams).length === 0 }
  })
  .json();
}

export async function show(id) {
  return api.swot(`dwellings/flats/${id}`).json();
}

export async function pdf(searchParams) {
  return api.swot('pdf', { searchParams }).text();
}
