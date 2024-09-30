import express from 'express'
import cors from 'cors'
import { generateOTP, sendOTP } from './otpSender.js'
import { addNewUserOTP, db } from './database.js'
import authRoutes from './routes/auth.js';

/**Dieu*********** */

const app = express()
app.use(cors())
app.use(express.json()); // Để phân tích JSON trong body
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}...`)
})

// Sử dụng router cho chức năng auth
app.use('/api/auth', authRoutes(db));


/*****************************************/

//sign up route
app.post('/sign-up', async (req, res) => {

    const { role, fullname, email, password } = req.body;

    if (!role || !fullname || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const otp = generateOTP();

    const result = await addNewUserOTP(role, fullname, email, password, otp);

    if (!result) {
        console.error('Query unsuccessfully!')
    } else {
        sendOTP(email, otp)
        res.status(200).json({ message: 'User created. OTP sent to email.' });
    }
});

// OTP verification route
app.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ error: 'Email and OTP are required' });
    }

    const result = await verifyOtp(email)
});

