# 💧 Kleitech – Smart Kidney Care Platform

**Kleitech** is an innovative web and mobile platform developed as a graduation project to revolutionize the healthcare journey for kidney patients. It leverages AI-driven medical image analysis, personalized health recommendations, and seamless communication tools to provide a smarter and more supportive patient experience — all in a fully responsive and accessible interface.

---

## 🚀 Live Demo

> 🔗 Coming Soon...

---

## 📚 Table of Contents

* [✨ Features](#-features)
* [🛠 Tech Stack](#-tech-stack)
* [⚙️ Installation](#️-installation)
* [📁 Folder Structure](#-folder-structure)
* [🖼️ Screenshots](#️-screenshots)
* [👥 Team](#-team)
* [📄 License](#-license)
* [📬 Contact](#-contact)

---

## ✨ Features

* 🧠 **AI Medical Image Analysis**
  Upload and analyze medical images (e.g. ultrasounds, CT scans) with smart AI-powered insights.

* 🧾 **Medical Records Dashboard**
  Centralized access to lab reports, prescriptions, and treatment schedules.

* 🥗 **Personalized Health & Diet Tips**
  Daily health advice tailored to each patient’s condition and needs.

* 🗓 **Doctor Appointment Booking**
  Easy scheduling of consultations with specialized nephrologists.

* 🔔 **Automated Reminders**
  Stay on track with alerts for medications, dialysis sessions, and upcoming appointments.

---

## 🛠 Tech Stack

| Frontend           | Backend          | AI Server        | DevOps & Tools         |
| ------------------ | ---------------- | ---------------- | ---------------------- |
| React + TypeScript | Laravel (PHP)    | FastAPI (Python) | Vite                   |
| Redux Toolkit      | RESTful API      | Uvicorn, NumPy   | GitHub Actions (CI/CD) |
| React Router       | MySQL/PostgreSQL | ML Models        | ESLint, Prettier       |

---

## ⚙️ Installation

### 🔵 Frontend Setup

```bash
git clone https://github.com/mohamed-mos-aad/graduation-project
cd graduation-project
npm install
npm run dev
```

> Visit the app at: [http://localhost:5173](http://localhost:5173)

---

### 🟢 Backend (Laravel API)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed   # optional
php artisan serve
```

> Don't forget to set your `.env` file with correct DB credentials.

---

### 🔴 AI Server (FastAPI)

```bash
cd ai
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
```

> API will run at: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 📁 Folder Structure

```
kleitech/
├── ai/
│   ├── main.py
│   ├── model/
│   └── requirements.txt
│
├── backend/
│   ├── app/
│   ├── routes/
│   └── .env
│
├── src/
│   ├── api/
│   │   └── auth, chat, comments, main
│   ├── app/slices/
│   │   └── auth, chat, main, ui
│   ├── assets/
│   │   └── dashboard, icons, images, main, ui
│   ├── components/
│   │   └── chat, forms, dashboard, landing, ui
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── interfaces/
│   ├── layouts/
│   ├── pages/
│   ├── routers/
│   ├── style/
│   ├── utils/
│   └── validation/
```

---

## 🖼️ Screenshots

📷 *Coming Soon!*
Demo videos and visuals of the app will be shared soon.

---

## 👥 Team

* 👨‍💻 **Mohamed Ahmed** – Frontend Developer & Project Lead
  [LinkedIn](https://www.linkedin.com/in/mohamed-mos-aad) | [GitHub](https://github.com/Mohamed-Mos-aad)

* 🎨 **Amira El-Ezaby** – UI/UX Designer & Product Manager

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more details.

---

## 📬 Contact

Have any questions, suggestions, or collaboration ideas? Reach out!

📧 Email: **[ma3268787@gmail.com](mailto:ma3268787@gmail.com)**

---

> ⭐ If you found this project helpful or inspiring, feel free to star the repo on GitHub!
