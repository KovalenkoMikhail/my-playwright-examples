export enum Environment {
  DEV = 'dev',
  STAGING = 'staging',
  PROD = 'prod'
}

export const getEnvironmentConfig = (env: Environment) => {
  switch (env) {
    case Environment.DEV:
      return {
        baseUrl: process.env.DEV_BASE_URL,
        apiUrl: process.env.DEV_API_URL
      };
    case Environment.STAGING:
      return {
        baseUrl: process.env.STAGING_BASE_URL,
        apiUrl: process.env.STAGING_API_URL
      };
    default:
      throw new Error(`Environment ${env} not supported`);
  }
};