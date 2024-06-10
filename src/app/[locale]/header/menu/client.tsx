'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTranslations } from "next-intl";
import { useState } from 'react'
import { MenuItem, Character } from './types'
import MenuIcon from '~icons/menu'
import Chevron from '~icons/chevron';

export default function Menu({ categories = [], characters = [] }: { categories?: MenuItem[], characters?: Character[] }) {
    const t = useTranslations('menu');
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);
    const { locale = 'tr' } = useParams<{ locale?: string }>();

    return (
        <section className={'py-5'}>
            <button
                onClick={() => setIsMenuActive(!isMenuActive)}
                className={'flex flex-wrap items-center text-left border border-[#3B3B3B33] rounded-md text-sm p-2.5 font-medium lg:min-w-[180px]'}>
                    <MenuIcon />
                    <span className={'flex-1 ml-2'}>{t('title')}</span>
                    <Chevron />
            </button>
            {categories.length > 0 && (
                <>
                    <section
                        className={`z-[2] absolute top-full left-0 text-sm text-center w-full flex flex-wrap lg:shadow ${isMenuActive ? 'block' : 'hidden'}`}>
                        <nav className={'w-full lg:w-24'}>
                            {categories.map((category, index) => (
                                <Link
                                    hrefLang={locale}
                                    locale={locale}
                                    onMouseEnter={() => setActiveMenuIndex(index)}
                                    key={category.id}
                                    className={'hover:bg-[#ededed] bg-[#e8e8e8] block py-4 px-2'}
                                    href={`/${locale}/${category.slug}`}>
                                    {category.name}
                                </Link>
                            ))}
                            <Link
                                hrefLang={locale}
                                locale={locale}
                                onMouseEnter={() => setActiveMenuIndex(categories.length)}
                                className={'hover:bg-[#ededed] bg-[#e8e8e8] block py-4 px-2'}
                                href={`/${locale}/karakterler`}>
                                {'Karakterler'}
                            </Link>
                        </nav>
                        {activeMenuIndex > -1 && (
                            <section className={'lg:flex-1'}>
                                <nav
                                    className={`bg-white flex flex-wrap overflow-y-auto lg:absolute lg:h-full lg:w-full`}>
                                    {categories[activeMenuIndex]?.children.map((child, index) => (
                                        <section
                                            key={child.id}
                                            className={'w-full lg:w-[calc(100%/5)] lg:py-2 lg:inline-block break-inside-avoid'}>
                                            <Link
                                                hrefLang={locale}
                                                locale={locale}
                                                className={'text-sm font-medium text-[#3B3B3B] block mb-2'}
                                                href={`/${locale}/${child.slug}`}>
                                                {child.name}
                                            </Link>
                                            {child.children.length > 0 && (
                                                <nav className={'grid gap-2'}>
                                                    {child.children.map((child2, childIndex) => (
                                                        <Link
                                                            hrefLang={locale}
                                                            locale={locale}
                                                            key={child2.id}
                                                            className={'text-xs text-[#3B3B3B] block hover:underline hover:font-medium'}
                                                            href={`/${locale}/${child2.slug}`}>
                                                            {child2.name}
                                                        </Link>
                                                    ))}
                                                </nav>
                                            )}
                                        </section>
                                    ))}

                                    {characters?.map((character, index) => (
                                        <section
                                            key={character.id}
                                            className={'w-full lg:w-[calc(100%/5)] lg:py-2 lg:inline-block break-inside-avoid'}>
                                            <Link
                                                hrefLang={locale}
                                                locale={locale}
                                                className={'text-sm font-medium text-[#3B3B3B] block mb-2'}
                                                href={character.name}>
                                                <Image
                                                    src={character.avatar}
                                                    alt={character.name}
                                                    width={90}
                                                    height={90}
                                                    className={'mx-auto block mb-2'}
                                                />
                                                <span>{character.name}</span>
                                            </Link>
                                        </section>
                                    ))}
                                </nav>
                            </section>
                        )}
                    </section>
                </>
            )}
        </section>
    )
}