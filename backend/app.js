import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}...`)
})

//code các phương thức get, post, delete, put ở dưới đây



/*****************************************/

