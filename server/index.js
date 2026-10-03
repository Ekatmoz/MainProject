import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
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
const dotenvResult = dotenv.config({ path: envPath });
// #region agent log
fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',hypothesisId:'B',location:'server/index.js:dotenv',message:'dotenv load result',data:{envPath,envExists:fs.existsSync(envPath),dotenvError:dotenvResult.error?String(dotenvResult.error):null,hasMangoUri:Boolean(process.env.MANGO_URI),hasMongoUri:Boolean(process.env.MONGO_URI)},timestamp:Date.now()})}).catch(()=>{});
// #endregion


connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/checkout', stripeRoutes);
app.use('/api/orders', orderRoutes);


app.get('/api/config/google', (req, res) => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  // #region agent log
  fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',runId:'post-fix',hypothesisId:'E',location:'server/index.js:google',message:'google config served',data:{hasGoogleClientId:Boolean(googleClientId),googleClientIdLength:googleClientId?String(googleClientId).length:0},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  res.send(googleClientId);
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
  // #region agent log
  fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',runId:'post-fix',hypothesisId:'F',location:'server/index.js:listen',message:'server listening',data:{port,cwd:process.cwd(),script:process.env.npm_lifecycle_event||null,pid:process.pid},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
});

server.on('error', (err) => {
  // #region agent log
  fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',runId:'post-fix',hypothesisId:'F',location:'server/index.js:listenError',message:'server listen failed',data:{code:err.code,port,pid:process.pid},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Stop the other process (e.g. lsof -i :${port}) or use a different PORT.`);
    process.exit(1);
  }
  throw err;
});
