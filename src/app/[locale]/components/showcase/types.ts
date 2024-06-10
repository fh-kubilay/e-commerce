import type { Product } from '~actions/product/types';

export type Props = {
    products?: Product[];
    className?: string;
    title?: string;
}