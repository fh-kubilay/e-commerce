import { getBanners } from '~actions/banners'
import Client from './client'

export default async function Carousel({ className = '' }: { className?: string }) {
    const data = await getBanners(1);

    return <Client slides={data?.payload?.banners} className={className} />
}