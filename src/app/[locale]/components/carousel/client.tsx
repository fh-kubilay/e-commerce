"use client"

import Image from 'next/image'
import { useState, useCallback } from "react";
import type { Banner } from '~actions/banners/types';
import RightArrow from '~icons/right-arrow';
import LeftArrow from '~icons/left-arrow';

export default function Carousel({ slides = [], className = '' }: { slides?: Banner[], className?: string }) {
    const [index, setIndex] = useState(0);

    const handleNext = useCallback((): void => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides]);

    const handlePrev = useCallback((): void => {
        setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }, [slides]);

    return (
        <nav className={`flex relative mx-auto h-96 ${className}`}>
            {slides.map((slide, i) => (
                <picture
                    key={i}
                    className={`block absolute inset-0 w-full h-full ${i === index ? 'block' : 'hidden'}`}
                >
                    <Image
                        src={slide.image_url}
                        alt={slide.title || slide.sub_title || slide.action_text || ''}
                        fill
                        objectFit={'cover'}
                        className={'w-full'}
                    />
                </picture>
            ))}
            <button
                onClick={handlePrev}
                className="left-0 absolute lg:-left-12 top-1/2 transform -translate-y-1/2"
            >
                <LeftArrow width={30} height={30} />
            </button>
            <button
                onClick={handleNext}
                className="right-0 absolute lg:-right-12 top-1/2 transform -translate-y-1/2"
            >
                <RightArrow width={30} height={30} />
            </button>
        </nav>
    );
};
