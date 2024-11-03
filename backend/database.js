import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
//Code ở bên dưới

export async function signUpNewUserAccount(role, name, email, password, phone) {
    return new Promise((resolve, reject) => {
        db.connect((error) => {
            if (error) {
                return reject(error);
            }
            else {
                const sql = "INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)";
                db.query(sql, [name, email, password, phone, role], (error, results) => {
                    if (error) {
                        console.error.apply("Error inserting new user: ", error);
                        return reject(error);
                    }
                    else {
                        console.log("Added successfully!");
                        resolve(results);
                    }
                })
            }
        })
    });
}

// export async function addNewUserOTP(role, fullname, email, password, otp) {
//     return new Promise((resolve, reject) => {
//         db.connect((err) => {
//             if (err) {
//                 return reject(err);
//             }
            
//             const sql = 'INSERT INTO userotps (role, fullname, email, password, otp) VALUES (?, ?, ?, ?, ?)';
//             db.query(sql, [role, fullname, email, password, otp], (err, results) => {
//                 if (err) {
//                     console.error('Error inserting user:', err);
//                     return reject(err);
//                 }

//                 console.log('Added successfully!');
//                 resolve(results);
//             });
//         });
//     })
// }

// export async function verifyOtp(email) {
//     return new Promise((resolve, reject) => {
//         db.connect((err) => {
//             if (err) {
//                 return reject(err)
//             }

//             const sql = 'SELECT otp FROM userotps WHERE email = ?'
//             db.query(sql, [email], (err, results) => {
//                 if (err) {
//                     console.error('Error fetching user')
//                     console.error('Database error')
//                     return reject(err)
//                 }

//                 if (results.length === 0) {
//                     console.error('User not found')
//                     return reject(err)
//                 }

//                 const storedOtp = results[0].otp;
                
//                 if (storedOtp == otp) {
//                     console.log('OTP verified. Account activated')
//                     resolve(results)
//                 } else {
//                     console.log('Invalid OTP');
//                 }
//             })
//         })
//     })
// }



/* ********************************************* */