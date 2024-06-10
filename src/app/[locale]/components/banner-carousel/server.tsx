import Client from './client'
import { getBanners } from './actions'

export default async function BannerCarousel({ className = '' }: { className?: string }) {
    const data = await getBanners(3);

    return <Client banners={data?.payload?.banners} className={className} />
}