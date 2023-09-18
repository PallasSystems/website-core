import React, { FC } from 'react';
// Contact specific icons
import { Git, Github } from 'react-bootstrap-icons';
// Footer Properties
import { SCMProperties } from './SCMIcon.types';

function isGitHubRepository(url: string) {
    return url.indexOf("github") > -1;
}

function generateGitBrowseURL(repository: string, project: string, endpoint?: string, ) {

    let result = '';

    if (undefined === endpoint || null === endpoint || 0 === endpoint.length) {
        result += "https://github.com/";
    } else {
        result += endpoint;
    }

    if (undefined !== project && null !== project && project.length > 0) {
        result += project;
        result += "/";
    }

    if (undefined === repository || null === repository || 0 === repository.length) {
        result = '';
    } else {
        result += repository;
    }

    return result;
}

const SCMIcon: FC<SCMProperties> = ({ endpoint, project, repository }) => {

    const url = generateGitBrowseURL(repository, project, endpoint );

    return (
        <a id={"SCMIcon." + project + "." + repository } className="text-light, px-1" href={ url }>
              { url.length > 0 ? (isGitHubRepository(url) ? <Github /> : <Git />) : null }
        </a>
    );
};

export { SCMIcon };