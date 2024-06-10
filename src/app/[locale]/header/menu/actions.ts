'use server'

import { Menu, Characters } from './types'

export async function getCategories(): Promise<Menu> {
    const response = await fetch(process.env.BASE_API_URL + 'categories/menu');
    return response.json();
}

export async function getCharacters(): Promise<Characters> {
    const response = await fetch(process.env.BASE_API_URL + 'characters');
    return response.json();
}