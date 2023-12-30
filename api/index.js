const express = require('express');
const crypto = require('crypto');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
	.connect('mongodb+srv://admin:Pass123@cluster0.stbv5iu.mongodb.net/')
	.then(() => console.log('Connected to Database'))
	.catch((e) => console.log('Error connection to Database ', e));

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
