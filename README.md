# ☕ Coffee Shop Full-Stack App

A modern, full-stack coffee ordering app built with **Next.js**, **MongoDB**, and **Prisma**, featuring full authentication, cart management, and secure API routes. Built for speed, scalability, and learning real-world patterns.

---

## 🚀 Features

- 🔐 **Authentication**
  - Register/Login with JWT-based auth stored in cookies
  - Passwords hashed with `argon2`
  - Protected routes using a custom `privateRoute` pattern

- 🛍️ **Cart System**
  - Add to cart (per user)
  - Remove from cart
  - Update quantity
  - Cart UI with real-time updates

- 🧾 **Product Management**
  - Products manually seeded into MongoDB
  - Displayed in a clean, responsive layout

- ⚙️ **Backend API**
  - Structured endpoints using `Zod` validation
  - Centralized error handling with `handleError`
  - Database access via `Prisma` + `$transaction` where necessary

- 🎨 **Frontend UI**
  - Built with **Tailwind CSS**
  - Toast notifications using `react-hot-toast`
  - Clean, mobile-responsive design

---

## 🧱 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | Next.js, React, Tailwind CSS |
| Backend      | Next.js API Routes   |
| Database     | MongoDB (via Prisma) |
| Auth         | JWT + Cookies + argon2 |
| Validation   | Zod                  |
| Toasts       | react-hot-toast      |

---

## 📸 Screenshots
### home page
<img width="1897" height="920" alt="Screenshot (1834)" src="https://github.com/user-attachments/assets/07452212-f12c-4132-a1b4-932c053ad6bb" />

### menu page
<img width="1897" height="883" alt="Screenshot (1838)" src="https://github.com/user-attachments/assets/07a3eb3c-4513-490f-b49b-92caf8434f7b" />

### contact page
<img width="1900" height="877" alt="Screenshot (1840)" src="https://github.com/user-attachments/assets/69bbd852-5852-45e2-ba5f-fec4a6aee0b8" />

### login page
<img width="1920" height="880" alt="Screenshot (1841)" src="https://github.com/user-attachments/assets/d7ee86e8-8d00-426d-8218-f12863e8c55a" />

---

1. **Clone the repo**

```bash
git clone https://github.com/sabesh82/coffee-shop-app.git
cd coffee-shop-app
```
2. **Install dependencies**
```bash
npm install
```
3..env.
DATABASE_URL=mongodb+srv://your-db-url
JWT_SECRET=your_secret_key

4.Push Prisma schema + seed data
```bash
npx prisma db push
```
5.Run the dev server
```bash
npm run dev
```

---
Made with ❤️ by Sabesh
