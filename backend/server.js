import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

// for deployment purpose on render.com we have changed the bcrypt(c++ version which was creating compilation issue on the deployed local system) package to bcryptjs(pure js implementation good for deployment purpose) --> so if any issue occur in running this project locally go back to bcrypt: steps below:-
// npm uninstall bcryptjs
// npm install bcrypt


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoint

app.use('/api/admin', adminRouter )
// localhost:4000/api/admin/add-doctor
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send("API working...");
})

app.listen(port, () => console.log("server started", port))