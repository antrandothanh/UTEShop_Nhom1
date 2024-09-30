import express from 'express'
import cors from 'cors'
import conn from './database.js'
import authRoutes from './routes/auth.js';

const app = express()
app.use(cors())
app.use(express.json()); // Để phân tích JSON trong body
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}...`)
})

//code các phương thức get, post, delete, put ở dưới đây
// Kiểm tra kết nối
conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Sử dụng router cho chức năng auth
app.use('/api/auth', authRoutes(conn));


/*****************************************/

