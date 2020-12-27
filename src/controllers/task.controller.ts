import { Request, Response } from 'express';

import TaskModel from '../models/task.model';


export const getAll = async (req: Request, res: Response) => {
    try {
        const tasks = await TaskModel.find({
            user: req.user!._id
        });
        res.status(200).send(tasks);
    } catch(err) {
        res.status(404).send(err);
    }
}

export const postCreateTask = async (req: Request, res: Response) => {
    try {
        const tasksData = req.body
        tasksData.user = req.user!._id;
        const task = await TaskModel.create(tasksData);
        res.status(201).send(task);
    } catch(err) {
        res.status(400).send(err);
    }
}

export const updateTaskById = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).send(task);
    } catch(err) {
        res.status(400).send(err);
    }
}

export const deleteTaskById = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findByIdAndDelete(
            req.params._id
        );
        res.status(200).send(task);
    } catch(err) {
        res.status(404).send(err);
    }
}
