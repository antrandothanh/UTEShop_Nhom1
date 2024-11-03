import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Router } from 'express';

const authRoutes = (db) => {
    const router = Router();

    // Đăng nhập
    router.post('/login', (req, res) => {
        const { email, password } = req.body;

        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return res.status(500).json(err);
            if (results.length === 0) return res.status(401).json({ message: 'User not found' });

            const user = results[0];
            // // So sánh mật khẩu
            // bcrypt.compare(password, user.password, (err, isMatch) => {
            //     if (err) return res.status(500).json(err);
            //     if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

            //     // Tạo JWT
            //     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            //     res.json({ token });
            // });
            // So sánh mật khẩu trực tiếp (không dùng bcrypt)
            console.log(user.password, password);
            if (password !== user.password) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Nếu mật khẩu đúng, tạo JWT
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json(
                {
                    token,
                    user,
                }
            );
        });
    });

    return router;
};

export default authRoutes;
