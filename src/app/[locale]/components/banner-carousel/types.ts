import { Meta } from "~types/api/meta";

export type Banner = {
    action_text: string;
    background_color: string;
    id: number;
    image_url: string;
    link: string;
    sub_title: string;
    title: string;
    type: string;
}

export type Banners = {
    payload: {
        banners: Banner[];
    }
} & Meta;