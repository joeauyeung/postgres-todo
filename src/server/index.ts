import express from 'express';
import cors from 'cors';

import todoRoutes from './routes/todos';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

app.use('/todo', todoRoutes);

app.listen(8080, () => {
    console.log('Server has started on port 8080');
});
