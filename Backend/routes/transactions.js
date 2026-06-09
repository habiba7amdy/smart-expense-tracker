const express = require("express");
const router = express.Router();
const db = require("../db");

// ADD transaction
router.post("/", (req, res) => {
    const { user_id, amount, category, type, description, transaction_date } = req.body;

    const sql = `
        INSERT INTO transactions 
        (user_id, amount, category, type, description, transaction_date)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [user_id, amount, category, type, description, transaction_date],
        (err, result) => {
            if (err) return res.json(err);

            res.json({ message: "Transaction added" });
        }
    );
});

router.get("/:user_id", (req, res) => {
    const sql = "SELECT * FROM transactions WHERE user_id = ?";

    db.query(sql, [req.params.user_id], (err, result) => {
        if (err) return res.json(err);

        res.json(result);
    });
});

router.get("/summary/:user_id", (req, res) => {
    const userId = req.params.user_id;

    const sql = `
        SELECT 
            SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS income,
            SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS expense
        FROM transactions
        WHERE user_id = ?
    `;

    db.query(sql, [userId], (err, result) => {
        if (err) return res.json(err);

        const income = result[0].income || 0;
        const expense = result[0].expense || 0;
        const balance = income - expense;

        res.json({
            income,
            expense,
            balance
        });
    });
});

router.delete("/:id", (req, res) => {
    const sql = "DELETE FROM transactions WHERE id = ?";

    db.query(sql, [req.params.id], (err) => {
        if (err) return res.json(err);

        res.json({
            message: "Deleted Successfully"
        });
    });
});

module.exports = router;