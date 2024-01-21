export const IsGitHubRepository = (url: string) => {
  return url.indexOf('github') > -1;
};

export const GenerateGitBrowseURL = (repository: string, project: string, endpoint?: string) => {
  let result = undefined;

  if (repository && repository.length > 0) {
    if (project && project.length > 0) {
      if (endpoint && endpoint.length > 0) {
        if (endpoint.endsWith('/')) {
          result = endpoint + project + '/' + repository;
        } else {
          result = endpoint + '/' + project + '/' + repository;
        }
      } else {
        result = 'https://github.com/' + project + '/' + repository;
      }
    } else if (endpoint && endpoint.length > 0) {
      if (endpoint.endsWith('/')) {
        result = endpoint + repository;
      } else {
        result = endpoint + '/' + repository;
      }
    } else {
      result = 'https://github.com/' + repository;
    }
  }

  return result;
};
