import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/ask', async (req, res) => {
	const { message } = req.body;

	try {
		const openaiRes = await axios.post(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				model: "openai/gpt-3.5-turbo", // или другая модель, например: "mistral/mistral-7b-instruct"
				messages: [{ role: "user", content: message }],
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
					'Content-Type': 'application/json',
					'HTTP-Referer': 'http://localhost:5173/', // твой сайт
					'X-Title': 'ChatGPT clone', // можно любое имя проекта
				}
			}
		);

		const reply = openaiRes.data.choices[0].message.content;
		res.json({ reply });

	} catch (err) {
		console.error('OpenRouter error:', err.response?.data || err.message);
		res.status(500).json({ error: "Ошибка при запросе к OpenRouter" });
	}
});

app.listen(3000, () => {
	console.log('✅ Server http://localhost:3000');
});
