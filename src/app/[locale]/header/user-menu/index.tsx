import { useTranslations } from 'next-intl';
import User from '~icons/user'

export default function UserMenu({ className = '' }: { className?: string }) {
    const t = useTranslations('user_menu');
    return (
        <section className={className}>
            <button className={'flex flex-wrap items-center text-[#3B3B3B] text-xs font-medium'}>
                <User />
                <span className={'ml-2'}>{t('title')}</span>
            </button>
        </section>
    )
}