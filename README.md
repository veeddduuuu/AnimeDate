# Waifu / AnimeDate

Welcome to the Waifu/AnimeDate project! This repository contains a full-stack application featuring a Python backend and a Vite-based frontend.

## Prerequisites

- Node.js
- Python 3.9+
- Docker & Docker Compose (optional, for easy deployment)
- PostgreSQL (or NeonDB as used in production)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd waifu
   ```

2. **Environment Setup:**
   Copy the example environment file and fill in your details:
   ```bash
   cp .env.example .env
   ```
   Add your API keys (Groq, HuggingFace) and database URL.

3. **Backend Setup:**
   ```bash
   cd apps/backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   # Run the server (e.g., uvicorn main:app --reload)
   ```

4. **Frontend Setup:**
   ```bash
   cd apps/frontend
   npm install
   npm run dev
   ```

## Architecture

- `apps/frontend`: Vite, Tailwind CSS frontend.
- `apps/backend`: Python backend with agents and guards using Groq/HuggingFace.

## Docker Support

You can also run the application using Docker Compose:
```bash
docker-compose up --build
```
