module.exports = {
  env: {
    MONGO: process.env.MONGO,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL,
  },
  images: {
    domains: ['adware-technologies.s3.amazonaws.com'],
  },
};