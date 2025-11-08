import express from 'express'
import CarRoutes from "./routes/car.routes.js"
import cors from 'cors'

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

app.use('/api', CarRoutes);

export default app;
