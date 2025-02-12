import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.post('/addUser', (req, res) => {
    // let { userID, name, email } = req.body;
    // let sql = `INSERT INTO user (userID, name, email) VALUES (?, ?, ?)`;

    // pool.query(sql, [userID, name, email], (error, result) => {
    //     if (error) {
    //         console.error(error.message);
    //         return res.status(500).json({ error: 'Database error' });
    //     }
    //     res.json({ message: 'User added', id: result.insertId });
    // });
});

export default router;
