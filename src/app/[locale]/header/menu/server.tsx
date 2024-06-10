import { getCategories, getCharacters } from './actions'
import Client from './client'

export default async function Menu() {
    const { payload: { menu } } = await getCategories();
    const { payload: { characters } } = await getCharacters();

    return <Client categories={menu} characters={characters} />
}