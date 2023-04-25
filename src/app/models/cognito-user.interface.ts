export interface CognitoUser {
  username: string;
  pool: Pool;
  Session?: null;
  client: Client;
  signInUserSession: SignInUserSession;
  authenticationFlowType: string;
  storage: Storage;
  keyPrefix: string;
  userDataKey: string;
  attributes: Attributes;
  preferredMFA: string;
}
export interface Pool {
  userPoolId: string;
  clientId: string;
  client: Client;
  advancedSecurityDataCollectionFlag: boolean;
  storage: Storage;
}
export interface Client {
  endpoint: string;
  fetchOptions: FetchOptions;
}
export interface FetchOptions {}
export interface Storage {
  'CognitoIdentityServiceProvider.5upvkfapuo0bi3sru3f1d9g0dh.p3pirata.clockDrift': string;
  'CognitoIdentityServiceProvider.5upvkfapuo0bi3sru3f1d9g0dh.LastAuthUser': string;
  'CognitoIdentityServiceProvider.5upvkfapuo0bi3sru3f1d9g0dh.p3pirata.accessToken': string;
  'amplify-redirected-from-hosted-ui': string;
  'CognitoIdentityServiceProvider.5upvkfapuo0bi3sru3f1d9g0dh.p3pirata.userData': string;
  'amplify-signin-with-hostedUI': string;
  'CognitoIdentityServiceProvider.5upvkfapuo0bi3sru3f1d9g0dh.p3pirata.idToken': string;
  'CognitoIdentityServiceProvider.1hkgk2b7hvst4d9fouq18spdg3.p3cunha.clockDrift': string;
  'CognitoIdentityServiceProvider.1hkgk2b7hvst4d9fouq18spdg3.p3cunha.refreshToken': string;
  'CognitoIdentityServiceProvider.1hkgk2b7hvst4d9fouq18spdg3.p3cunha.userData': string;
  '@firebase/performance/config': string;
  'CognitoIdentityServiceProvider.1hkgk2b7hvst4d9fouq18spdg3.LastAuthUser': string;
  'CognitoIdentityServiceProvider.1hkgk2b7hvst4d9fouq18spdg3.p3cunha.idToken': string;
  client_obj: string;
  '@firebase/performance/configexpire': string;
  'CognitoIdentityServiceProvider.1hkgk2b7hvst4d9fouq18spdg3.p3cunha.accessToken': string;
  'CognitoIdentityServiceProvider.5upvkfapuo0bi3sru3f1d9g0dh.p3pirata.refreshToken': string;
}
export interface SignInUserSession {
  idToken: IdToken;
  refreshToken: RefreshToken;
  accessToken: AccessToken;
  clockDrift: number;
}
export interface IdToken {
  jwtToken: string;
  payload: Payload;
}
export interface Payload {
  sub: string;
  email_verified: boolean;
  iss: string;
  'cognito:username': string;
  origin_jti: string;
  aud: string;
  event_id: string;
  token_use: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  email: string;
}
export interface RefreshToken {
  token: string;
}
export interface AccessToken {
  jwtToken: string;
  payload: Payload1;
}
export interface Payload1 {
  sub: string;
  iss: string;
  client_id: string;
  origin_jti: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  username: string;
}
export interface Attributes {
  sub: string;
  email_verified: boolean;
  email: string;
}
