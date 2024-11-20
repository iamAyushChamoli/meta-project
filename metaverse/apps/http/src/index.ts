import express from 'express';
import cors from 'cors';
import { router } from './routes/v1';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});