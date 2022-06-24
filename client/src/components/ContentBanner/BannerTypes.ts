export type ContentBannerProps = {
    height: number;
    width: number;
    type?: 'image-only' | 'text-only'
    backgroundColor?: string;
    backgroundPicture?: string;
    newProduct?: boolean;
    link?: string;
    title?: string;
    highlightedTitle?: boolean;
    description?: string;
    reverse?: true | false;
    key?: string;
}