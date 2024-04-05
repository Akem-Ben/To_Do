"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLists = void 0;
const todo_1 = require("../models/todo");
const getAllLists = async (request, response) => {
    try {
        const allLists = await todo_1.Todo.findAll({});
        if (!allLists || allLists.length === 0)
            return response.status(404).json({ status: `error`, message: `no lists found` });
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
exports.getAllLists = getAllLists;
