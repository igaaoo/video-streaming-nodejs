module.exports = {
  apps: [
    {
      name: 'video-streaming',
      script: 'src/server.js',
      autorestart: true,
      env: {
        NODE_ENV: 'prod',
        // PORT: 7777,
      },
    }]
};
