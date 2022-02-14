import { RequestHandler } from 'express';
import pool from '../db';

export const createTodo: RequestHandler = async (req, res, next) => {
    try {
        const { description } = req.body as { description: string };
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [
            description,
        ]);
        res.status(201).json(newTodo.rows[0]);
    } catch (error) {
        console.error(error);
    }
};

export const getTodos: RequestHandler = async (req, res, next) => {
    try {
        const allTodos = await pool.query('SELECT * from todo');
        res.status(201).json(allTodos.rows);
    } catch (error) {
        console.error(error);
    }
};

export const getTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
        res.status(201).json(todo.rows[0]);
    } catch (error) {
        console.error(error);
    }
};

export const updateTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description } = req.body as { description: string };
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [
            description,
            id,
        ]);
        res.status(201).json('Todo was updated');
    } catch (error) {
        console.error(error);
    }
};

export const deleteTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
    } catch (error) {
        console.error(error);
    }
};
