import { writable } from 'svelte/store';

export const currentDropdownSelection = writable('/operator/');
export const currResponse = writable<{ [key: string]: any }>();
export const operatorName = writable('Rockrock');