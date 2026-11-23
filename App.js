import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/connectDB.js';
import userRouter from './routes/user.route.js';
import restroRouter from './routes/restro.route.js';

const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/restro', restroRouter);

try {
    await connectDB(process.env.MONGODB_URI);
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
