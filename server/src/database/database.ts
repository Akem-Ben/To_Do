import {Sequelize} from 'sequelize'
import dotenv from 'dotenv';


dotenv.config()

const {
    DEV_PORT,
    DB_NAME,
    DB_USERNAME,
    DB_HOST,
    DB_PASSWORD
} = process.env

export const database = new Sequelize(
    DB_NAME!,
    DB_USERNAME!,
    DB_PASSWORD as string,
{
    host: DB_HOST,
    port: DEV_PORT as unknown as number,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        encrypt: true
    },
}

)