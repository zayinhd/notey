# Notey
Notey is a web application for creating, saving, and collaborating on notes with other users.  
It is designed for individuals and teams to capture ideas, stay organized, and work together in real time.


---

## Features
- Create and edit personal notes
- Organize notes into categories or folders
- Share notes with other users for collaboration
- Search and filter notes
- Responsive design for desktop and mobile
- Secure authentication and authorization

---

## Tech Stack
- Frontend: Next.js (React), Tailwind CSS, Framer Motion
- Backend: Node.js  (or Next.js API routes)
- Database: Supabase
- Authentication: Supabase Auth (Email, Google)
- Deployment: Vercel

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/zayinhd/notey.git
cd notey
```

## 2. Install dependencies
```bash
npm install
```

## 3. Configure environment variables
Create a .env.local file in the project root and add the following:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 4. Run the development server
```bash
npm run dev
```

The app will be available at http://localhost:3000.

---

## Usage

Sign up or log in with your account.

Create a new note from the dashboard.

Share notes with teammates by email.

Edit notes collaboratively in real time.

---

## Contributing

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m "feat: add your feature")

Push to your branch (git push origin feature/your-feature)

Open a Pull Request

