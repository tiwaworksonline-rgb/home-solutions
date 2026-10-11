import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { z } from 'zod';

const app = express();
app.disable('x-powered-by');
app.use(helmet());
const allowedOrigins = (process.env.CORS_ORIGINS || '').split(',').map(s=>s.trim()).filter(Boolean);
app.use(cors({origin: allowedOrigins.length ? allowedOrigins : false}));
app.use(express.json({limit:'64kb'}));

app.get('/health', (_req,res) => res.json({status:'ok',service:'home-solutions-api',phase:'foundation'}));
app.get('/api/v1/status', (_req,res) => res.json({ready:false,features:{accounts:false,projects:false,photos:false,ai:false,payments:false},message:'Backend scaffold only; production services not enabled.'}));

// No unauthenticated project-write endpoint is exposed until identity,
// authorization, database persistence, and rate limits are implemented.
app.use('/api', (_req,res) => res.status(404).json({error:'Endpoint not available'}));
app.use((err,_req,res,_next)=>{console.error('Request failed',err?.name);res.status(500).json({error:'Internal server error'});});
const port=Number(process.env.PORT)||3000;
app.listen(port,'0.0.0.0',()=>console.log('Home Solutions API listening on '+port));
