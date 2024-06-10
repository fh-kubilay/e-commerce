import Logo from '~components/logo';
import Links from './links'
import Search from './search'
import Notifications from "./notifications";
import UserMenu from './user-menu'
import Cart from './cart'
import Menu from './menu/server'
import LocaleSwitcher from "./locale-switcher";

export default function Header() {
    return (
        <header>
            <section className="container flex flex-wrap items-center py-[13px]">
                <Logo/>
                <section className={'lg:flex-1'}>
                    <section className="flex flex-wrap lg:items-center lg:justify-end">
                        <Links />
                        <LocaleSwitcher className={'ml-5'} />
                    </section>
                </section>
            </section>
            <section className={'bg-[#FFCC34]'}>
                <section className="container flex flex-wrap items-center relative">
                    <Menu />
                    <Search className={'ml-10'} />
                    <section className={'flex-1'}>
                        <section className={'flex flex-wrap items-center justify-end'}>
                            <Notifications />
                            <UserMenu className={'ml-10'} />
                            <Cart className={'ml-10'} />
                        </section>
                    </section>
                </section>
            </section>
        </header>
    )
}