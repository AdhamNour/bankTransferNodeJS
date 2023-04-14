import {Router} from 'express'

export const router = Router();

router.get('/',checkSourceAccountExists, checkBalanceAvailability , transferAmmount)