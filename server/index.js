import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import cors from 'cors';
import connectToDatabase from './database.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import stripeRoutes from './routes/stripeRoute.js';

const __filename = fileURLToPath(import.meta.url);
const serverDir = path.dirname(__filename);
const projectRoot = path.resolve(serverDir, '..');
const envPath = path.join(projectRoot, '.env');
dotenv.config({ path: envPath });

connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/checkout', stripeRoutes);
app.use('/api/orders', orderRoutes);


app.get('/api/config/google', (req, res) => {
  res.send(process.env.GOOGLE_CLIENT_ID);
});


const port = process.env.PORT || 4000;

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if(process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/client/dist')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')));
}

const server = app.listen(port, () => {
  console.log(`Server runs on port ${port}.`)
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Stop the other process (e.g. lsof -i :${port}) or use a different PORT.`);
    process.exit(1);
  }
  throw err;
});
