const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const openaiRouter = require('./routes/openaiRoutes');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/openai', openaiRouter);

app.listen(port, () => {
	console.log(
		`server is running on port ${port}`
	);
});
