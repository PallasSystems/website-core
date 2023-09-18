import React, { FC } from 'react';
// Contact specific icons
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
// Footer Properties
import { SocialMediaProperties } from './SocialMediaSection.types';
import { SCMIcon, SCMProperties } from '../SCMIcon';

function isValidString(value?: string) {
    return value !== undefined && null != value && value.length > 1;
}

function hasSocialMediaValues(facebook? : string, instagram? : string, twitter? : string, linkedin? : string, scm? : SCMProperties) {
    return isValidString(facebook) || isValidString(instagram) || isValidString(twitter) || isValidString(linkedin) || (undefined !== scm && null !== scm);
}

const SocialMediaSection: FC<SocialMediaProperties> = ({ headerText, facebook, instagram, twitter, linkedin, scm }) => {
    return (
        <div id="SocialMediaSectionWrapper" className="pt-2">
            { isValidString(headerText) ? <p>{headerText}</p> : null }
            { hasSocialMediaValues(facebook, instagram, twitter, linkedin, scm) ?
                <p id="SocialMediaSectionWrapper.IconBlock">
                    { ( isValidString(facebook) ) ? 
                        <a id="SocialMediaSectionWrapper.IconBlock.facebook" 
                           className="text-light, px-1" 
                           href={ "https://www.facebook.com/groups/" + facebook }>
                            <Facebook />
                        </a> : null
                    }
                    { ( isValidString(instagram) ) ? 
                        <a id="SocialMediaSectionWrapper.IconBlock.facebook" 
                           className="text-light, px-1" 
                           href={ "https://instagram.com/" + instagram }>
                            <Instagram />
                        </a> : null
                    }
                    { ( isValidString(linkedin) ) ? 
                        <a id="SocialMediaSectionWrapper.IconBlock.facebook" 
                           className="text-light, px-1" 
                           href={ "https://linkedin.com/in/" + linkedin }>
                            <Linkedin />
                        </a> : null
                    }
                    { ( isValidString(twitter) ) ? 
                        <a id="SocialMediaSectionWrapper.IconBlock.facebook" 
                           className="text-light, px-1" 
                           href={ "https://twitter.com/" + twitter }>
                            <Twitter />
                        </a> : null
                    }
                    { ( scm === null || scm === undefined) ? null :
                        <SCMIcon {...scm} />
                    }
                </p>
                : null 
            }
        </div>
    );
};

export { SocialMediaSection };