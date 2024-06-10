import Image from 'next/image'
import {useTranslations} from "next-intl";
import Link from 'next/link'

const data = [
    {
        icon: '/images/clublogo/clublogo.png',
        title: 'ToyzzClub',
        href: '/toyzzclub',
    },
    {
        key: 'stores',
        href: '/stores'
    },
    {
        key: 'help',
        href: '/help'
    }
]

export default function Links() {
    const t = useTranslations('links');

    return (
        <nav className={'flex flex-wrap items-center justify-end'}>
            {data.map((item, index) => (
                <Link key={index} href={item.href} title={item.title} className={'flex justify-center items-center ml-2 text-[10px] hover:underline text-[#3B3B3B]'}>
                    {item.icon ? (
                        <>
                            <Image src={item.icon} alt={item.title} width={20} height={20} />
                            <span className={'ml-1'}>{item.title || t(item.key || 'stores')}</span>
                        </>
                    ) : item.title || t(item.key as 'stores' | 'help')}
                </Link>
            ))}
        </nav>
    )
}