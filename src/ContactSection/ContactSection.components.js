import React from 'react';
// Contact specific icons
import { Envelope, Telephone, Phone, Printer, House } from 'react-bootstrap-icons';
/**
 * Some Address sections are optional, this checks the supplied value exists and is valid and creates an address
 * string (e.g. "<value>, ").
 * @param {String} value - The Contact section string we want to validate and append
 */
function validateAddressValue(value) {
    let result = '';
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
function constructAddressString(props) {
    let result = '';
    if (undefined !== props && null !== props) {
        result += props.line1 + ', ';
        result += validateAddressValue(props.line2);
        result += props.city + ', ';
        result += validateAddressValue(props.county);
        result += props.country + ', ';
        result += props.postCode;
    }
    return result;
}
function isValidString(value) {
    return value !== undefined && null != value && value.length > 1;
}
const ContactSection = ({ email, fax, mobile, landline, address }) => {
    const addressString = constructAddressString(address);
    return (React.createElement("div", { id: "ContactWrapper", className: "pt-2" },
        React.createElement("h5", { className: "text-uppercase fw-bold mb-4" }, "Contact"),
        addressString.length > 0 ? React.createElement("p", null,
            React.createElement(House, null),
            " ",
            addressString) : null,
        isValidString(email) ?
            React.createElement("p", null,
                React.createElement("a", { href: "mailto: " + email },
                    React.createElement(Envelope, null),
                    " ",
                    email))
            : null,
        isValidString(fax) ? React.createElement("p", null,
            React.createElement(Printer, null),
            " ",
            fax) : null,
        isValidString(mobile) ? React.createElement("p", null,
            React.createElement(Phone, null),
            " ",
            mobile) : null,
        isValidString(landline) ? React.createElement("p", null,
            React.createElement(Telephone, null),
            " ",
            landline) : null));
};
export { ContactSection };
//# sourceMappingURL=ContactSection.components.js.map