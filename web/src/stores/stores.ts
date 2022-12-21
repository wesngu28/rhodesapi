import { writable } from 'svelte/store';

export const currentDropdownSelection = writable('/operator/');
export const api = writable('GET');
export const currResponse = writable({} as {[key: string]: any});
export const operatorName = writable('Surtr')

fetch('https://raw.githubusercontent.com/wesngu28/rhodesapi/docusite/web/src/stores/default.json')
  .then(response => response.json())
  .then(data => currResponse.set(data));