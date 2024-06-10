import type { Meta } from "~types/api/meta";

export type ListParams = {
    slug?: string;
    limit?: number;
    page?: number;
    order?: string;
    max_price?: number;
    min_price?: number;
}


export type Pagination = {
    page: number;
    pageCount: number;
    limit: number;
    total: number;
    order: string;
}

export type ProductPrice = {
    currency: string;
    currency_symbol: string;
    decimal_seperator: string;
    fraction: string;
    fraction_str: string;
    original: number;
    original_str: string;
    thousands_separator: string;
    whole: number;
    whole_str: string;
}

export type ProductImage = {
    id: number;
    order: number;
    product_serialid: number;
    productid: number;
    title: string | null;
    type: number;
    url: string;
}

export type Product = {
    brand_id: number;
    category_id: number;
    comment_count: string;
    created_at: string;
    discount_ratio: number;
    exclusive: number;
    fix_status: number;
    gender: string;
    id: number;
    image_types: {
        mini: string;
        original: string;
        thumbnail: string;
    };
    image_url: string;
    images: ProductImage[];
    is_discounted: boolean;
    new_product: boolean;
    old_price: ProductPrice;
    price: ProductPrice
    on_toyzzshopcom: boolean;
    product_code: string;
    product_name: string;
    quantity: number;
    serial_id: number;
    title: string;
    virtual_stock: number;
    visit_count: number;
}

export type Showcase = {
    payload: {
        products: Product[];
        filters: {
            categories: {
                id: number;
                parentid: number;
                name: string;
                slug: string;
                count: number;
            }[];
            brands: {
                id: number;
                name: string;
                count: number;
            }[];
            characters: {
                id: number;
                name: string;
                count: number;
            }[];
            prices: {
                name: string;
                start: number;
                to: number;
            }[];
        }
        customlists: string;
        pagination: Pagination;
    }
} & Meta;