# LMS Sample (Next.js + JavaScript + Ant Design)

This is a sample implementation for the **Intern Test**: Login, Course List (paginated), Add/Edit Course, Route Guard — built with **Next.js (app router)**, **JavaScript**, and **Ant Design**.

## What is included
- Login page (hardcoded credentials)
- Protected course pages (list, add, edit)
- CRUD via mock API (mockapi.io base URL included)
- Ant Design UI: Form & Table
- Simple token-based auth in localStorage
- Instructions to run locally & deploy to Vercel

## Quick start (local)
1. Install Node.js (>=16) and npm.
2. Extract project and run:
   ```bash
   cd lms-sample-js-antdesign
   npm install
   npm run dev
   ```
3. Open http://localhost:3000/login

**Login credentials (hardcoded)**:
- Email: `test@gmail.com`
- Password: `123456`

## Deploy to Vercel
1. Create a GitHub repo and push all files.
2. Sign in to Vercel and connect the GitHub repo.
3. Vercel will detect Next.js; click Deploy.
4. (Optional) Add environment variables if you change API base URL.

## Notes
- The project uses the mock API base URL from the test: `https://6938e7e24618a71d77d19513.mockapi.io/api/v1/course`
- If you want client-side routing without the app router, you can adapt to pages directory.

---
If you want, I can also:
- Create the GitHub repo structure ready for push.
- Walk you through the Vercel steps with screenshots.
- Add pagination, search debounce, or UI polishing.
