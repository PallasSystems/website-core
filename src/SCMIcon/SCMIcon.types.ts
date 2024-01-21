import { ReactNode } from 'react';
import { ImageProperty } from '../Common';

/**
 * @typedef {object} SCMProperties
 * @property {String} SCMProperties.endpoint - URL of the SCM.
 * @property {String=} SCMProperties.project - Most SCM's embed a Repository within a group/owner/project
 * @property {String} SCMProperties.repository - The repository name
 * @property {String} SCMProperties.className - URL of the SCM.
 * @property {String=} SCMProperties.imgFn - Most SCM's embed a Repository within a group/owner/project
 * @property {String} SCMProperties.imgProps - The repository name
 */
export interface SCMProperties {
  endpoint?: string;
  project: string;
  repository: string;
  className?: string;
  imgFn?: (props?: ImageProperty) => ReactNode;
  imgProps?: ImageProperty;
}
