import express from 'express'
import cors from 'cors'
//import { generateOTP, sendOTP } from './otpSender.js'
import { 
    signUpNewUserAccount, 
    db, 
    getAllProducts, 
    getAllCategories,
    getProductById,
    getCategoryById,
} from './database.js'
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
app.post('/api/sign-up', async (req, res) => {

    const { role, name, email, password, phone } = req.body;

    if (!role || !name || !email || !password || !phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await signUpNewUserAccount(role, name, email, password, phone);
    if (!result) {
        console.error("Query unsuccessfully!");
    }
    else {
        res.status(200).json(
            {
                message: "New user was created!",
            }
        );
    }

    //const otp = generateOTP();

    //const result = await addNewUserOTP(role, fullname, email, password, otp);

    // if (!result) {
    //     console.error('Query unsuccessfully!')
    // } else {
    //     //sendOTP(email, otp)
    //     res.status(200).json({ message: 'User created.' });
    // }
});

// OTP verification route
// app.post('/verify-otp', async (req, res) => {
//     const { email, otp } = req.body;

//     if (!email || !otp) {
//         return res.status(400).json({ error: 'Email and OTP are required' });
//     }

//     const result = await verifyOtp(email)
// });

app.get("/api/get-all-products", async (request, response) => {
    try {
        const products = await getAllProducts();
        response.status(200).json((products));
    }
    catch {
        response.status(500).json(
            {
                error: "fail to retrieve products",
            }
        );
    }
});

app.get("/api/get-all-categories", async (request, response) => {
    try {
        const categories = await getAllCategories();
        response.status(200).json((categories));
    }
    catch {
        response.status(500).json(
            {
                error: "fail to retrieve categories",
            }
        );
    }
});

app.get("/api/product/:id", async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const product = await getProductById(id);
        response.status(200).json(product[0]);
    }
    catch {
        response.status(404).json(
            {
                error: "fail to retrieve product",
            }
        );
    }
});

app.get("/api/category/:id", async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const category = await getCategoryById(id);
        response.status(200).json(category[0]);
    }
    catch {
        response.status(404).json(
            {
                error: "fail to retrieve category",
            }
        );
    }
});
