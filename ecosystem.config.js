module.exports = {
    apps: [
        {
            name: 'tiendamoda',
            script: 'npm run start',
            autorestart: true,
            watch: false,
            env: {
                PORT: 2022,
                NODE_ENV: 'development'
            },
            env_production: {
                PORT: 2022,
                NODE_ENV: 'production'
            }
        }
    ]
};