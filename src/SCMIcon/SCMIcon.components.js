import React from 'react';
// Contact specific icons
import { Git, Github } from 'react-bootstrap-icons';
function isGitHubRepository(url) {
    return url.indexOf("github") > -1;
}
function generateGitBrowseURL(repository, project, endpoint) {
    let result = '';
    if (undefined === endpoint || null === endpoint || 0 === endpoint.length) {
        result += "https://github.com/";
    }
    else {
        result += endpoint;
    }
    if (undefined !== project && null !== project && project.length > 0) {
        result += project;
        result += "/";
    }
    if (undefined === repository || null === repository || 0 === repository.length) {
        result = '';
    }
    else {
        result += repository;
    }
    return result;
}
const SCMIcon = ({ endpoint, project, repository }) => {
    const url = generateGitBrowseURL(repository, project, endpoint);
    return (React.createElement("a", { id: "SCMIcon." + project + "." + repository, className: "text-light, px-1", href: url }, url.length > 0 ? (isGitHubRepository(url) ? React.createElement(Github, null) : React.createElement(Git, null)) : null));
};
export { SCMIcon };
//# sourceMappingURL=SCMIcon.components.js.map