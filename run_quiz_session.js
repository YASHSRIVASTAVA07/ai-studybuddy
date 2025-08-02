import { evaluateAnswer } from './evaluate_answer.js';
import { logQuizToNotion } from './notion_logging.js';

const studentId = 'student_001';
const question = "What is Newton's Second Law of Motion?";
const answer = "Force equals mass times acceleration.";

const run = async () => {
  const { score, feedback } = await evaluateAnswer(question, answer);
  await logQuizToNotion({ studentId, question, answer, feedback, score });
};

run();
