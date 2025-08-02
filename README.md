# 🧠 AI StudyBuddy – Voice-Powered GPT Learning Assistant

**AI StudyBuddy** is an intelligent voice-interactive app for students.  
It helps learners:
- 📝 Get real-time feedback on their spoken answers (Quiz Mode)
- ❓ Ask any question and receive AI-generated explanations (Ask Me Anything Mode)

Built for **Swafinix AI Hackathon 2025** under the Education theme.

---

## 🎯 Features

✅ Voice input using browser mic  
✅ GPT-powered evaluation and explanations  
✅ "Ask Me Anything" toggle mode  
✅ Quiz feedback logged to Notion database  
✅ Futuristic neon UI  
✅ OpenRouter (GPT-3.5), Node.js backend, Notion API

---

## 🛠️ Tech Stack

| Layer       | Tech Used                        |
|-------------|----------------------------------|
| Frontend    | HTML, Web Speech API, JS         |
| Backend     | Node.js, Express.js              |
| LLM         | GPT-3.5 via OpenRouter API       |
| Storage     | Notion API (logs answers + scores) |

---

## 🚀 Live Demo (Local)

### 🔧 Setup Instructions

1. **Clone this repo:**

git clone https://github.com/YASHSRIVASTAVA07/ai-studybuddy.git
cd ai-studybuddy
npm install
Create a .env file based on .env.example:

OPENAI_API_KEY=your-openrouter-key
NOTION_API_KEY=your-notion-secret
NOTION_DB_ID=your-notion-db-id
Start backend server:

node webhook_server.js
Open frontend in Chrome:

Open index.html directly in Google Chrome

Click 🎤 "Start Talking"

Speak an answer or question

🧪 Modes
🧠 Quiz Mode (Default)
You answer a question (e.g. "Force equals mass times acceleration")

GPT checks if you're right and gives feedback

Score, answer, and feedback are logged in Notion

❓ Ask Me Anything Mode
Enable the toggle switch

Speak any question (e.g. "What is photosynthesis?")

GPT responds like a smart tutor

📦 Folder Structure
ai-studybuddy/
├── index.html               # Futuristic frontend UI
├── webhook_server.js        # Backend server with /webhook & /ask
├── evaluate_answer.js       # GPT interaction logic
├── notion_logging.js        # Logs quiz answers to Notion
├── .gitignore               # Ignores node_modules & .env
├── .env.example             # Sample env vars
├── package.json             # Backend dependencies
└── README.md                # You're here
🧠 Example .env file
OPENAI_API_KEY=sk-your-openrouter-key
NOTION_API_KEY=secret_xxx
NOTION_DB_ID=abcde12345...
⚠️ Do not commit this file. Keep it secret!

🎥 Demo Video Script (Hackathon)
Run node webhook_server.js

Open index.html in Chrome

Show Quiz Mode → Speak: “Force equals mass times acceleration”

Show feedback + log in Notion

Enable Ask Mode → Ask: “What is Newton’s First Law?”

Show GPT response

🧠 Future Enhancements
🏆 Leaderboards for quiz scores

📱 Convert to mobile PWA

🔁 Daily quiz scheduler (via cron/n8n)

🗣️ Text-to-speech for AI responses
