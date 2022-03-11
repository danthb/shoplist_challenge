require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const corsOptions = {
    origin: 'http://localhost:3000',
}
connectDB();

const app = express();

app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/products', productRoutes)

const PORT =    process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));