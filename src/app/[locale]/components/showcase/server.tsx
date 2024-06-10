import { getProducts } from '~actions/product'
import Client from './client';

type Props = {
    slug?: string;
    className?: string;
}

export default async function Showcase({ slug = 'indirimli-urunler', className = '' }: Props) {
    const showcase = await getProducts({ slug, limit: 20 });
    return <Client className={className} products={showcase?.payload?.products} title={showcase?.payload?.customlists} />
}