import express from 'express';
import { transferAmmount,checkSourceAccountExists,checkBalanceAvailability } from './banktransfer_controller.js';

const app = express();

app.use(express.json());

app.get('/api/banktransfer',checkSourceAccountExists, checkBalanceAvailability , transferAmmount)
app.listen(4000,()=>{console.log('app is running');})