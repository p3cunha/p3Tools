/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const awsmobile = {
  "aws_project_region": "sa-east-1",
  "aws_appsync_graphqlEndpoint": "https://4h25tmpybjexxahhvxrmchpxwq.appsync-api.sa-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "sa-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-lcdcc5x5ljefrj2fsoyisvluuq",
  "aws_cognito_identity_pool_id": "sa-east-1:2cac9dcd-16e0-430e-8ce1-63d582471270",
  "aws_cognito_region": "sa-east-1",
  "aws_user_pools_id": "sa-east-1_ijzBKUwPR",
  "aws_user_pools_web_client_id": "k84969vbp4pt16cc0j5ajrjth",
  "oauth": {
      "domain": "p3toolsf30dd669-f30dd669-dev.auth.sa-east-1.amazoncognito.com",
      "scope": [
          "phone",
          "email",
          "openid",
          "profile",
          "aws.cognito.signin.user.admin"
      ],
      "redirectSignIn": isLocalhost ? "http://localhost:4200/" : "https://main.deiwqrj6tlhw5.amplifyapp.com/",
      "redirectSignOut":  isLocalhost ? "http://localhost:4200/" : "https://main.deiwqrj6tlhw5.amplifyapp.com/",
      "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS",
  "aws_cognito_username_attributes": [],
  "aws_cognito_social_providers": [
      "GOOGLE"
  ],
  "aws_cognito_signup_attributes": [
      "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
};


export default awsmobile;
