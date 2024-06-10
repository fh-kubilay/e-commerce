'use client';

import ProductCard from '~components/product-card';
import type { Props } from './types'

export default function Showcase({ products = [], className = '', title }: Props) {
    return (
        <section className={`${className}`}>
            {title && <h2 className={'mb-5 text-2xl font-bold leading-[32px] text-[#3B3B3B]'}>{title}</h2>}
            <nav className={`grid grid-cols-4 gap-4`}>
                {products.map((product, index) => <ProductCard key={index} {...product} />)}
            </nav>
        </section>
    )
}