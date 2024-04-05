import { Request, Response } from "express";
import { Todo, TodoAttributes } from "../models/todo";


export const getAllLists = async(request:Request, response:Response) => {
    try{

            const allLists = await Todo.findAll({})

            if(!allLists || allLists.length === 0) return response.status(404).json({status: `error`, message: `no lists found`})
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