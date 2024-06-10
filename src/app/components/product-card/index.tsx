"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { createSlug } from "~helper/url";
import type { Product } from '~actions/product/types'

export default function ProductCard({ title, product_code, product_name, image_url, is_discounted, old_price, price, new_product, discount_ratio }: Product) {
    const { locale = 'tr' } = useParams<{ locale?: string }>();

    return (
        <Link
            hrefLang={locale}
            locale={locale}
            href={`/${locale}/${createSlug(title)}`}
            className={'relative block w-full bg-white text-center mb-5 rounded shadow-md lg:mb-0 lg:py-2 lg:px-4'}>
            {new_product && <span
                className={'absolute top-2 right-2 py-1 px-2 bg-[#FFA82D] text-white text-xs rounded'}>{'Yeni'}</span>}
            <Image
                src={image_url}
                alt={title}
                width={250}
                height={250}
                className={'mx-auto block'}
            />
            <article className={'text-left'}>
                <h3 className={'text-xs leading-[16px] h-[32px] overflow-hidden font-bold text-[#3B3B3B] mb-3'}>{product_code} {product_name}</h3>
                {is_discounted && (
                    <>
                        <del className={'text-[10px] text-[#9D9D9D] font-medium'}>{old_price.original_str} {old_price.currency}</del>
                        <small
                            className={'ml-3 text-white bg-[#FF4E21] py-1 px-2 rounded-sm text-[11px] font-medium'}>{`%${discount_ratio}`}</small>
                    </>
                )}
                <div className={`${is_discounted ? 'mt-2' : ''} font-normal text-[15px]`}>{price.original_str} {price.currency}</div>
            </article>
        </Link>
    )
}