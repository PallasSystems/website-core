import { SCMProperties } from '../SCMIcon/index';

/**
 * @typedef {object} SocialMediaProperties
 * @property {String=} SocialMediaProperties.facebook - Faceboook Group Identifier,
 * @property {String=} SocialMediaProperties.instagram - Instagram Account Identifier,
 * @property {String=} SocialMediaProperties.twitter - Twitter Account Identifier,
 * @property {String=} SocialMediaProperties.linkedin - LinkedIn Account Identifier,
 * @property {SCMProperties=} SocialMediaProperties.scm - Source Control Management information to go in the media bar,
 */
export interface SocialMediaProperties {
    headerText?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    scm?: SCMProperties;
}