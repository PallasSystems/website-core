import React, { FC } from 'react';
// Contact specific icons
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
// Footer Properties
import { SocialMediaProperties } from './SocialMediaSection.types';

const isValidString = (value?: string) => {
  return value !== undefined && null != value && value.length > 1;
};

const hasSocialMediaValues = (facebook?: string, instagram?: string, twitter?: string, linkedin?: string) => {
  return isValidString(facebook) || isValidString(instagram) || isValidString(twitter) || isValidString(linkedin);
};

const SocialMediaSection: FC<SocialMediaProperties> = ({ headerText, facebook, instagram, twitter, linkedin }) => {
  return (
    <div id='SocialMediaSectionWrapper' className='pt-2'>
      {isValidString(headerText) ? <p className={'m-1'}>{headerText}</p> : null}
      {hasSocialMediaValues(facebook, instagram, twitter, linkedin) ? (
        <p id='SocialMediaSectionWrapper.IconBlock' className={'m-1'}>
          {isValidString(facebook) ? (
            <a
              id='SocialMediaSectionWrapper.IconBlock.facebook'
              className='text-light, px-1'
              href={'https://www.facebook.com/groups/' + facebook}
            >
              <Facebook />
            </a>
          ) : null}
          {isValidString(instagram) ? (
            <a
              id='SocialMediaSectionWrapper.IconBlock.facebook'
              className='text-light, px-1'
              href={'https://instagram.com/' + instagram}
            >
              <Instagram />
            </a>
          ) : null}
          {isValidString(linkedin) ? (
            <a
              id='SocialMediaSectionWrapper.IconBlock.facebook'
              className='text-light, px-1'
              href={'https://linkedin.com/in/' + linkedin}
            >
              <Linkedin />
            </a>
          ) : null}
          {isValidString(twitter) ? (
            <a
              id='SocialMediaSectionWrapper.IconBlock.facebook'
              className='text-light, px-1'
              href={'https://twitter.com/' + twitter}
            >
              <Twitter />
            </a>
          ) : null}
        </p>
      ) : null}
    </div>
  );
};

export { SocialMediaSection };
