import { Meta } from '~types/api/meta'

export type Breadcrumb = {
    link: string;
    name: string;
}

export type MenuItem = {
    id: number;
    title: string;
    list_image: null | string;
    section_image: string;
    featured: boolean;
    name: string;
    slug: string;
    rank: number;
    description: string;
    breadcrumb: Breadcrumb[];
    children: MenuItem[];
}

export type Menu = {
    payload: {
        menu: MenuItem[];
    }
} & Meta;

export type Character = {
    id: number;
    name: string;
    status: number;
    createDate: string;
    avatar: string;
    title: null | string;
    description: string | null;
    message: null | string;
    h1: string;
    active_banners: [];
}

export type Characters = {
    payload: {
        characters: Character[];
    }
} & Meta;