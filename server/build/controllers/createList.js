"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createList = void 0;
const todo_1 = require("../models/todo");
const uuid_1 = require("uuid");
const createList = async (request, response) => {
    try {
        const { title, description, duration } = request.body;
        const checkItem = await todo_1.Todo.findOne({ where: { title } });
        if (checkItem)
            return response.status(400).json({ status: `error`, message: `${title} already exists` });
        const createNewList = await todo_1.Todo.create({
            id: (0, uuid_1.v4)(),
            title,
            description,
            status: false,
            duration
        });
        const confirmItem = await todo_1.Todo.findOne({ where: { title, id: createNewList.id } });
        if (!confirmItem)
            return response.status(400).json({ status: `error`, message: `${title} not created, try again or contact the admin` });
        return response.status(201).json({ status: `success`, message: `${title} created successfully`, confirmItem });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        });
    }
};
exports.createList = createList;
