import { Request, Response } from "express";
import { Todo, TodoAttributes } from "../models/todo";
import {v4} from 'uuid'


export const createList = async(request:Request, response:Response) => {
    try{
        const {
            title,
            description,
            duration} = request.body;

            const checkItem = await Todo.findOne({where: {title}})

            if(checkItem) return response.status(400).json({status: `error`, message: `${title} already exists`})

            const createNewList = await Todo.create({
                id: v4(),
                title,
                description,
                status: false,
                duration
            }) as unknown as TodoAttributes

            const confirmItem = await Todo.findOne({where: {title, id:createNewList.id}})

            if(!confirmItem) return response.status(400).json({status: `error`, message: `${title} not created, try again or contact the admin`})

            return response.status(201).json({status: `success`, message: `${title} created successfully`, confirmItem})

    }catch(error:any){
        console.log(error.message)
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`
        })
    }
}