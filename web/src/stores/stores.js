import { writable } from 'svelte/store';

export const currentDropdownSelection = writable('/operator/');
export const api = writable('get');
export const currResponse = writable({});