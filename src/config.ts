export default {
    PORT: process.env['PORT'] || 8080,
    DB_URI: process.env['DB_URI'] as string,
    SALT_ROUNDS: 10,
    SECRET_KEY: process.env['SECRET_KEY'] as string
}
