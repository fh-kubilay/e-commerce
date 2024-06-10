import Link from 'next/link'
import { getLocale } from "next-intl/server";
import World from '~icons/world'
import Chevron from '~icons/chevron';

const languages = {
    tr: {
        title: 'Türkçe',
        currency: {
            code: 'TRY',
            name: 'TL'
        }
    },
    en: {
        title: 'English',
        currency: {
            code: 'USD',
            name: 'Dollar'
        }
    }
}

export default async function LocaleSwitcher({ className = '' }: { className?: string }) {
    const locale = await getLocale();

    return (
        <section className={`relative ${className}`}>
            <button className={'flex flex-wrap items-center justify-center p-2.5 border border-[#3B3B3B]/[0.2] rounded-md text-[10px]'}>
                <World />
                <span className={'ml-2'}>{locale.toLocaleUpperCase()}</span>
                <span className={'mx-2'}>{'|'}</span>
                <span>{languages[locale as 'tr' | 'en'].currency.code.toLocaleUpperCase()}</span>
                <Chevron />
            </button>
            <nav className={'absolute top-full left-0 z-[1] w-full bg-white shadow rounded-md'}>
                {Object.entries(languages).map(([key, value], index) => (
                    <Link className={'block p-2 text-[10px] text-[#3B3B3B]'} key={index} href={'/'} locale={key}>{value.title}</Link>
                ))}
            </nav>
        </section>
    )
}