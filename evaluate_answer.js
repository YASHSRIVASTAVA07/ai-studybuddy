import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

export const evaluateAnswer = async (question, answer = null, askOnly = false) => {
  const prompt = askOnly
    ? `Explain this to a student in simple terms:\n\n${question}`
    : `Evaluate this student's answer and give feedback:

Q: ${question}
A: ${answer}

Give 2 things in plain text:
1. Was it correct? (Yes/No)
2. Feedback in one sentence.
`;

  const chatResponse = await openai.chat.completions.create({
    model: 'openai/gpt-3.5-turbo',
    messages: [
      { role: 'system', content: askOnly ? 'You are an AI tutor.' : 'You are a helpful quiz evaluator.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.5,
  });

  const output = chatResponse.choices[0].message.content.trim();
  console.log('🤖 GPT Response:', output);

  if (askOnly) {
    return output;
  }

  const lines = output.split('\n').map(line => line.trim());
  const isCorrect = /1\.\s*(yes)/i.test(lines[0]) ? 1 : 0;
  const feedback = lines[1]?.replace(/^2\.\s*/, '').trim() || 'No feedback returned';

  return {
    score: isCorrect,
    feedback
  };
};
