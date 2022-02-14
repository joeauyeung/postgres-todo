import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

app.listen(8080, () => {
    console.log('Server has started on port 8080');
});
