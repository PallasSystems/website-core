/**
 * @typedef {object} SCMProperties
 * @property {String} SCMProperties.endpoint - URL of the SCM.
 * @property {String=} SCMProperties.project - Most SCM's embed a Repository within a group/owner/project
 * @property {String} SCMProperties.repository - The repository name
 */
export interface SCMProperties {
    endpoint?: string;
    project: string;
    repository: string;
}
