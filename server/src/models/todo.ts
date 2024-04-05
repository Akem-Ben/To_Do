import { database } from "../database/database";
import {Model, DataTypes} from 'sequelize'

export interface TodoAttributes {
    id: string;
    title: string;
    description?: string;
    status: boolean;
    duration: string;
}

export class Todo extends Model<TodoAttributes> {}

Todo.init(
    {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize: database,
    tableName: 'Todo'
}
)