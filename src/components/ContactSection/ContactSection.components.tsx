import React, { FC } from 'react';
// Contact specific icons
import { Envelope, Telephone, Phone, Printer, House } from 'react-bootstrap-icons';
// Footer Properties
import { ContactProperties, AddressSectionProperties } from './ContactSection.types';

/**
 * Some Address sections are optional, this checks the supplied value exists and is valid and creates an address
 * string (e.g. "<value>, ").
 * @param {String} value - The Contact section string we want to validate and append
 */
function validateAddressValue(value?: string) {
    let result = ''

    if (value !== undefined && value !== null && value.length > 0) {
        result += value + ', ';
    }

    return result;
}

/**
 * Builds a comma separated string holding the address
 * @param {AddressSectionProperties} props - The Contact section containing the details we are interested in.
 * @return An empty String, or a CSV representation of the address
 */
function constructAddressString(props?: AddressSectionProperties) {
    let result = ''

    if (undefined !== props && null !== props) {
        result += props.line1 + ', ';
        result += validateAddressValue(props.line2);
        result += props.city + ', '
        result += validateAddressValue(props.county);
        result += props.country + ', ';
        result += props.postCode;
    }

    return result;
}

function isValidString(value?: string) {
    return value !== undefined && null != value && value.length > 1;
}

const ContactSection: FC<ContactProperties> = ({ email, fax, mobile, landline, address }) => {

    const addressString =  constructAddressString(address);

    return (
        <div id="ContactWrapper" className="pt-2">
            <h5 className={"text-uppercase fw-bold mb-4"}>Contact</h5>
            { addressString.length > 0 ? <p><House /> {addressString}</p> : null }
            { isValidString(email) ?
                <p>
                    <a href={ "mailto: " + email }>
                        <Envelope /> {email}
                    </a>
                </p>
                : null
            }
            { isValidString(fax) ? <p><Printer /> { fax }</p> : null }
            { isValidString(mobile) ? <p><Phone /> { mobile }</p> : null }
            { isValidString(landline) ? <p><Telephone /> { landline }</p> : null }
        </div>
    )
};

export {ContactSection};