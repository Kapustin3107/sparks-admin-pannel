module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'db'),
        user: env('DATABASE_USERNAME', 'db'),
        password: env('DATABASE_PASSWORD', 'db'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: {
          ca: env('DATABASE_CA')
        },
      },
      debug: false,
    },
  });