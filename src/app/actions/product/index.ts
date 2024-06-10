import { Showcase } from '~actions/product/types'
import type { ListParams } from "./types";
import { createURL } from "@app/helper/url";

const baseURL = process.env.BASE_API_URL;

export async function getProducts({ slug = '', limit = 5, page = 1, order = 'ocd', max_price, min_price }: ListParams): Promise<Showcase> {
    const url = createURL(baseURL + `customlists/${slug}/products`, { order, page, limit, max_price, min_price })
    const response = await fetch(url)
    return response.json();
}