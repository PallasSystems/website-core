// Footer Properties
import { ContactProperties } from '../ContactSection/ContactSection.types';
import { SocialMediaProperties } from '../SocialMediaSection/SocialMediaSection.types'

export interface FooterProperties {
    companyName?: string;
    companyNameLink?: string;
    contact?: ContactProperties;
    socialMedia?: SocialMediaProperties;
}