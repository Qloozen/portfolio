export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'portfolio-cms'),
			user: env('DATABASE_USERNAME', 'portfolio-admin'),
			password: env('DATABASE_PASSWORD', '8N2JxHTz8'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
