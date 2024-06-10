"use client";

import ProductCard from '~components/product-card';
import type { Props } from './types';

export default function CarouselShowcase({ products = [], className = '', title }: Props) {

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {products.map((product, i) => (
                <ProductCard {...product} key={product.id} />
            ))}
        </div>
    );
}
