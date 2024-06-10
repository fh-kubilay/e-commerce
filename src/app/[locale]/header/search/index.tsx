import { useTranslations } from "next-intl";
import SearchIcon from '~icons/search'

export default function Search({ className = '' }: { className?: string }) {
    const t = useTranslations('search');
    return (
        <form className={`bg-white rounded-full flex flex-wrap items-center p-[12px_10px] lg:w-[480px] w-full ${className}`}>
            <SearchIcon />
            <input type="text" placeholder={t('placeholder')} className={'focus:outline-none ml-3 font-bold flex-1 placeholder:text-[#3B3B3B]/[0.50] text-xs'} />
        </form>
    )
}