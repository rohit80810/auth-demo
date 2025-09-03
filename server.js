require('dotenv').config()
const express = require('express');
const app = express();

const connectToDB = require('./database/db')
const PORT = process.env.PORT || 3000;
const authRoutes = require('./routes/authRoutes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const errorHandler = require("./middleware/error-handler-middleware");
//connect to database
connectToDB();

app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)


// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server is running on ",PORT);
})

