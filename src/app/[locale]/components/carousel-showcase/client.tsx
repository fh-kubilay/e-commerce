"use client";

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from '~components/product-card';
import type { Props } from './types';

const swiperProps: SwiperProps = {
    spaceBetween: 0,
    navigation: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
    modules: [Autoplay, Navigation]
}

export default function CarouselShowcase({ products = [], className = '', title }: Props) {
    return (
        <Swiper
            className={`${className}`}
            {...swiperProps}
        >
            {products.map((product, i) => (
                <SwiperSlide key={product.id}>
                    <ProductCard {...product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
