import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID;

export const logQuizToNotion = async ({ studentId, question, answer, feedback, score }) => {
  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Student ID': { title: [{ text: { content: studentId } }] },
        'Question': { rich_text: [{ text: { content: question } }] },
        'Answer': { rich_text: [{ text: { content: answer } }] },
        'Feedback': { rich_text: [{ text: { content: feedback } }] },
        'Score': { number: score },
        'Date': { date: { start: new Date().toISOString() } }
      }
    });
    console.log('✅ Quiz log added to Notion');
  } catch (err) {
    console.error('❌ Error logging to Notion:', err.message);
  }
};
