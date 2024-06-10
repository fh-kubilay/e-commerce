import Link from 'next/link'
import Image from 'next/image';
import Routes from '@/app/routes'

export default function Logo() {
    return (
        <Link href={Routes.home} locale={'tr'}>
            <Image
                src="/images/logo/logo.png"
                width={126}
                height={39}
                alt="Toyzzshop"
            />
        </Link>
    )
}