import React, { FC, ReactNode } from 'react';
import { Git, Github, IconProps } from 'react-bootstrap-icons';
// Footer Properties
import { SCMProperties } from './SCMIcon.types';
import { GenerateGitBrowseURL, IsGitHubRepository } from './SCMIcon.utils';
import { ImageProperty } from '../Common';

export const SCMIcon: FC<SCMProperties> = ({ endpoint, project, repository, className, imgFn, imgProps }) => {
  const url = GenerateGitBrowseURL(repository, project, endpoint);
  const linkClass = className && className.trim().length > 0 ? className : 'text-light';

  /**
   *
   * @param brand
   * @returns
   */
  const GenerateSCMLink = (
    url: string,
    imgFn?: (props?: ImageProperty) => ReactNode,
    imgProps?: ImageProperty,
  ): ReactNode => {
    let result: ReactNode = null;

    if (typeof imgFn === 'function') {
      result = imgFn(imgProps);
    } else {
      const props: IconProps = imgProps ? imgProps : {};
      if (IsGitHubRepository(url)) {
        result = <Github title={'GitHub'} {...props} />;
      } else {
        result = <Git {...props} />;
      }
    }

    return result;
  };

  return (
    <>
      {url && url.length > 0 ? (
        <p id={'SCMIcon.' + project + '.' + repository} className={linkClass} title='Project Source Code'>
          {GenerateSCMLink(url, imgFn, imgProps)}
        </p>
      ) : null}
    </>
  );
};
