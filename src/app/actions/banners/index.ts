import type { Banners } from './types'

export async function getBanners(id: number): Promise<Banners> {
    const response = await fetch(process.env.BASE_API_URL + `v3/banners/${id}`)
    return response.json()
}