import express from 'express'
import cors from 'cors'
import { generateOTP, sendOTP } from './otpSender.js'
import { addNewUserOTP } from './database.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}...`)
})


//code các phương thức get, post, delete, put ở dưới đây

app.get("/", (req, res) => {
    const message = {
        message: "Test..."
    }
    res.json(message)
})


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

/*****************************************/

