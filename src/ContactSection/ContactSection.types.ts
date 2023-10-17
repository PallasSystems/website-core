/**
 * @typedef {object} ContactProperties
 * @property {String=} ContactProperties.email - Email Address of the contact section,
 * @property {String=} ContactProperties.fax - Fax number for the contact section,
 * @property {String=} ContactProperties.mobile - Mobile Telephone number for the contact section,
 * @property {String=} ContactProperties.landline - Landline Telephone number for the contact section,
 * @property {AddressSectionProperties=} ContactProperties.address - Complete Address of the contact
 */
export interface ContactProperties {
    email?: string;
    fax?: string;
    mobile?: string;
    landline?: string;
    address?: AddressSectionProperties;
}

/**
 * @typedef {object} AddressSectionProperties
 * @property {String} AddressSectionProperties.line1 - First line of the contact address
 * @property {String=} AddressSectionProperties.line2 - Second line of the contact address
 * @property {String} AddressSectionProperties.city - City/Town/Village the contact resides within
 * @property {String=} AddressSectionProperties.county - The County the City/Town/Village is within
 * @property {String} AddressSectionProperties.Country - The Country (e.g. England, Wales, etc..)
 * @property {String} AddressSectionProperties.postCode - The Postal Code of the address
 */
export interface AddressSectionProperties {
    line1: string;
    line2?: string;
    city: string;
    county?: string;
    country: string;
    postCode: string;
}
