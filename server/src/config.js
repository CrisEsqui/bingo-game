export const PORT = process.env.PORT || 3001;

export const DB_CONFIG = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 5432,
    USER: process.env.USER || 'postgres',
    PASSWORD: process.env.PASSWORD || 'admin',
    DATABASE: process.env.DATABASE || 'bingo_db'
}