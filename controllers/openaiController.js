const {
	Configuration,
	OpenAIApi
} = require('openai');
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const generateImage = async (req, res) => {
	try {
		const response = await openai.createImage({
			prompt: req.body.prompt,
			n: 2,
			size: '1024x1024'
		});
		const imgURL = response.data.data[0].url;
		res.status(200).json({
			success: true,
			data: imgURL
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { generateImage };
