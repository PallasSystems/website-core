/**
 * The URL to use to redirect the user back to the home page.
 */
export type AuthenticationConfiguration = {
  authenticated?: boolean;
  setAuthenticated?: (arg: boolean) => void;
  homePathName?: string;
};
