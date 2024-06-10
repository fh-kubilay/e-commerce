import { useTranslations } from 'next-intl';
import CartIcon from '~icons/cart'

export default function Cart({ className = '' }: { className?: string }) {
    const t = useTranslations('cart')
    return (
        <section className={className}>
            <button className={'bg-[#FAE68C] text-[#3B3B3B] text-xs font-medium p-2.5 flex flex-wrap items-center rounded-md'}>
                <CartIcon />
                <span className={'ml-2'}>{t('title')}</span>
            </button>
        </section>
    )
}