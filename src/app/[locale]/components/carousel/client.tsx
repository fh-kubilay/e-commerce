"use client"

import Image from 'next/image'
import type { Banner } from '~actions/banners/types';
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";
import {Autoplay, Navigation} from 'swiper/modules'
import RightArrow from '~icons/right-arrow';
import LeftArrow from '~icons/left-arrow';

const swiperProps: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    modules: [Autoplay, Navigation]
}

export default function Carousel({ slides = [], className = '' }: { slides?: Banner[], className?: string }) {
    return (
        <Swiper className={`${className}`}>
            {slides.map((slide, i) => (
                <SwiperSlide
                    key={i}
                >
                    <img
                        src={slide.image_url}
                        alt={slide.title || slide.sub_title || slide.action_text || ''}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
