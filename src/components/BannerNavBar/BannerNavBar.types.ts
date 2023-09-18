import {ImageProperty} from '../Common/index';

export interface NavbarLinkProperty {
    path: string;
    text: string;
}

export interface NavbarProperty {
    brandName?: string;
    brandImg? : ImageProperty;
    items?: NavbarLinkProperty[];
}
