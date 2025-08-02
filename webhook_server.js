import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { evaluateAnswer } from './evaluate_answer.js';
import { logQuizToNotion } from './notion_logging.js';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  try {
    const { student_id, question, answer_text } = req.body;

    const { score, feedback } = await evaluateAnswer(question, answer_text);

    await logQuizToNotion({
      studentId: student_id || 'student_unknown',
      question,
      answer: answer_text,
      feedback,
      score
    });

    res.status(200).json({ status: 'Logged', feedback, score });
  } catch (err) {
    console.error('❌ Webhook Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/ask', async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log('[ASK MODE] Prompt:', prompt);

    const completion = await evaluateAnswer(prompt, null, true);

    res.status(200).json({
      feedback: completion
    });
  } catch (err) {
    console.error('❌ /ask error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Webhook listening on http://localhost:${PORT}`);
});
