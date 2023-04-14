import { getBalance, moveMoney } from "./DB.js";

export const transferAmmount = (req, res) => {
    const { sourceAccount, targetAccount, amount } = req.body;
    moveMoney(sourceAccount, targetAccount, amount).then((v) =>
        res.status(200).json({ message: "Funds transferred successfully" })
    ).catch((err) => res.status(500).json({ message: err }))
};

export const checkSourceAccountExists = (req, res, next) => {
    const { sourceAccount } = req.body;
    if (!sourceAccount) {
        return res.status(400).json({ error: "Source account is required" });
    }
    getBalance(sourceAccount).then((balance) => { res.locals.balance = balance; next(); })
};

export const checkBalanceAvailability = (req, res, next) => {
    const { amount } = req.body;
    if (amount > res.locals.balance) {
        return res.status(400).json({ error: "Insufficient funds" });
    }
    next();
};
