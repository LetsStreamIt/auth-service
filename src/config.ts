interface ServiceConfig {
  LOCAL_PORT: string
  JWT_SECRET: string
  PROFILE_SERVICE_HOSTNAME: string
  PROFILE_SERVICE_PORT: string
  MONGO_HOSTNAME: string
  MONGO_PORT: string
}

export const standardConfig: ServiceConfig = {
  LOCAL_PORT: process.env.PORT || '3000',
  JWT_SECRET: process.env.JWT_SECRET || 'testingsecret',
  PROFILE_SERVICE_HOSTNAME: process.env.PROFILE_SERVICE_HOSTNAME || 'localhost',
  PROFILE_SERVICE_PORT: process.env.PROFILE_SERVICE_PORT || '8080',
  MONGO_HOSTNAME: process.env.MONGO_HOSTNAME || 'localhost',
  MONGO_PORT: process.env.MONGO_PORT || '27017'
}
