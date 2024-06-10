"use client"

import Image from 'next/image'
import { useState, useCallback } from "react";
import type { Banner } from './types';
import RightArrow from '~icons/right-arrow';
import LeftArrow from '~icons/left-arrow';

export default function BannerCarousel({ banners = [], className = '' }: { banners?: Banner[]; className?: string }) {
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

    const handleNext = useCallback((): void => {
        setActiveSlideIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, [banners]);

    const handlePrev = useCallback((): void => {
        setActiveSlideIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    }, [banners]);

    return (
        <nav className={`flex relative mx-auto h-96 ${className}`}>
            {banners.map((banner, index) => (
                <picture
                    key={index}
                    className={`${index === activeSlideIndex ? 'block' : 'hidden'}`}
                >
                    <Image
                        src={banner.image_url}
                        alt={banner.title}
                        width={380}
                        height={140}
                    />
                </picture>
            ))}
            <button
                onClick={handlePrev}
                className="absolute left-0 lg:-left-12 top-1/2 transform -translate-y-1/2"
            >
                <LeftArrow width={30} height={30}/>
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 lg:-right-12 top-1/2 transform -translate-y-1/2"
            >
                <RightArrow width={30} height={30}/>
            </button>
        </nav>
    )
}