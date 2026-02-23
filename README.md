## 💧 Kleitech – Smart Kidney Care Platform

**Kleitech** is a full‑stack smart healthcare platform for kidney patients that combines a modern React + TypeScript frontend, a robust Laravel 11 REST API, and an AI image‑analysis service. It focuses on real‑world patient workflows: secure onboarding, medical image triage, appointment booking, reminder automation, and rich communication between patients, doctors, and admins.

The project is designed as a **production‑style graduation project** that showcases complex business logic, layered architecture, and clean frontend state management — making it suitable for both recruiters and contributors to explore.

---

## 📚 Table of Contents

- **[Project Overview](#-project-overview)**
- **[Tech Stack](#-tech-stack)**
- **[Key Features](#-key-features)**
- **[Project Structure](#-project-structure)**
- **[Installation & Setup](#-installation--setup)**
- **[Available Scripts](#-available-scripts)**
- **[Contribution Guide](#-contribution-guide)**
- **[Contact](#-contact)**

---

## 🩺 Project Overview

Kleitech helps kidney patients stay on top of their care by integrating:

- **Patient‑facing web app** built with React, TypeScript, and Vite.
- **Secure Laravel 11 API** with Sanctum, role‑based authorization, and structured domain models for patients, doctors, chats, appointments, reminders, and comments.
- **AI image analysis pipeline** (via a separate FastAPI service) that classifies uploaded medical images and streams results back to the UI.

The frontend is organized around layouts (`landing`, `auth`, `main`, `dashboard`, `chat`), while the backend exposes a rich set of REST endpoints (`/register`, `/login`, chat, appointments, reminders, stats, comments, etc.) wired through dedicated controllers and middleware. The Laravel backend concentrates most of the **complex domain logic**: enforcing booking rules, guarding admin/doctor actions, managing reminders, and orchestrating chat flows across multiple models and middlewares.

---

## 🛠 Tech Stack

### 🔷 Frontend

- ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white) **React 18**
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white) **TypeScript**
- ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) **Vite**
- ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2-764ABC?logo=redux&logoColor=white) **Redux Toolkit** (`src/app/slices`)
- ![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white) **React Router v7** (`src/routers`)
- ![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?logo=css3&logoColor=white) **CSS Modules** for scoped styling (`src/style`)
- ![Firebase](https://img.shields.io/badge/Firebase-11-FFCA28?logo=firebase&logoColor=black) **Firebase** for messaging/notifications config
- ![Axios](https://img.shields.io/badge/Axios-1-5A29E4?logo=axios&logoColor=white) **Axios** for HTTP clients (`src/api/**`)
- ![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?logo=socketdotio&logoColor=white) **Socket.IO** for real‑time features (chat presence/feedback)

### 🟢 Backend

- ![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?logo=php&logoColor=white) **PHP 8.2**
- ![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white) **Laravel 11** (`backend/`)
- ![Sanctum](https://img.shields.io/badge/Laravel%20Sanctum-4-FF2D20?logo=laravel&logoColor=white) **Laravel Sanctum** for API auth
- **MySQL / SQL database** via Laravel migrations and Eloquent models

**Core backend models and logic**:

- Domain models:
  - `Doctor`, `Patient`, `Appointment`, `Reservation`
  - `MedicationReminder`, `WaterReminder`, `DialysisReminder`
  - `Message`, `MessageReaction`, `Comment`
- Controllers orchestrating non‑trivial flows:
  - `AuthController`, `ChatController`, `DoctorController`, `PatientController`
  - `AppointmentController`, `ReminderController`, `StatsController`
  - `CommentsController`, `ResetPasswordController`, `FastApiController`
- Custom middlewares and policies for:
  - Admin‑only operations (e.g., managing doctors, patients, stats)
  - Doctor‑or‑admin scopes (`AdminOrDoctorMiddleware`)
  - Patient‑only update flows (profile, comments, reminders)

### 🔴 AI & Services

- ![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white) **Python + FastAPI** (external service, consumed via `aiApi.tsx`)
- `html2canvas` and custom logic to render/return annotated images
- `date-fns` for robust date/time utilities (e.g., reminders scheduling)

### 🧰 Tooling & DX

- ![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white) **ESLint** + `@typescript-eslint` for strict linting
- GitHub Pages deployment (`npm run deploy`)
- Composer scripts to bootstrap Laravel and run a unified dev environment

---

## ✨ Key Features

- **End‑to‑End Auth & Security**
  - Registration, login, logout, password reset with OTP emails.
  - Laravel Sanctum‑protected routes covering chat, doctors, patients, reminders, stats, and more (`backend/routes/api.php`).
  - Guarded dashboard routes and auth‑aware layouts on the frontend (`ProtectAuthRoutes`, `ProtectMainRoutes`, `ProtectDashboardRoutes`).

- **Doctor–Patient Chat with Rich UX**
  - Chat sessions, message listing, editing, deleting, and reactions handled in `ChatController` and related Eloquent models.
  - Frontend chat experience built from `ChatLayout`, `ChatHeader`, `ChatMessages`, `ChatFooter`, `ChatListItem`, emoji picker, and reactions.
  - Backend encapsulates complex chat life‑cycle rules, reaction handling, and participant permissions.

- **Intelligent Medical Image Analysis (AI)**
  - Patients can upload X‑ray/scan images directly from the home/consultation flows.
  - `clsPhoto` in `src/api/main/aiApi.tsx` sends images to the AI service, tracks upload progress, and interprets both **JSON results** and **image blobs** with a `classification` header.
  - UI orchestrates upload state, progress bars, error handling, and rendering AI‑annotated images.

- **Appointments, Booking & Admin Dashboard**
  - Backend endpoints such as:
    - `GET /appointments/available/{doctor_id}`
    - `POST /appointments/reserve/{appointment_id}`
  - Admin/doctor dashboards (`HomeDashboard`, `Doctors`, `Patients`, `ConsultationEmails`) provide:
    - Doctor/patient management.
    - Consultation email triage and response workflows.
    - Stats aggregation via `StatsController`.
  - Role‑based middleware ensures only the right roles can book, approve, or modify critical data.

- **Multi‑Channel Reminders & Notifications**
  - Laravel models and `ReminderController` handle **medication**, **water**, and **dialysis** reminders.
  - Frontend flows under `/m/alarm` and `/m/reminder` with specialized components (`MedicineAlarm`, `WaterAlarm`, `XRayAlarm`).
  - Utility logic (`src/utils/alarmReminder.ts` + `date-fns`) keeps reminders consistent, time‑zone aware, and user friendly.

- **Landing, Marketing & Contact Flows**
  - Structured landing sections: `AboutUs`, `Benefit`, `OurServices`, `PatientReviews`, `JoinUs`, `ContactUs`.
  - `ContactUsForm` integrates with `@emailjs/browser` for sending consultation and contact emails.
  - Designed to clearly communicate value to both patients and stakeholders.

---

## 📁 Project Structure

### Frontend (`/src`)

```text
src/
├── api/                # Typed Axios clients for auth, main flows, doctors, chat, comments, AI, etc.
├── app/
│   └── slices/         # Redux Toolkit slices (auth, OTP, done page, main AI data, UI state, dashboard)
├── assets/
│   ├── icons/          # SVG icon sets (navbar, UI, main pages)
│   ├── images/         # Static images and illustrations
│   └── ...             # Dashboard and other visual assets
├── components/
│   ├── chat/           # Chat shell (list, header, messages, footer) and chat‑specific widgets
│   ├── dashboard/      # Admin/doctor dashboard widgets (tables, search input, modals, popups)
│   ├── landing/        # Reusable landing sections and headers
│   └── ui/             # Inputs, password fields, booking modals, toasts, loaders, chat bubbles, etc.
├── constants/          # Static texts/config (e.g., landing copy)
├── data/               # Local mock/static data used by the UI
├── firebase/           # `firebase-config.ts` for Firebase initialization
├── hooks/              # Custom hooks such as `useMessagePop` and other UI/state hooks
├── interfaces/         # Shared TypeScript interfaces and types
├── layouts/            # Layout shells: LandingPageLayout, AuthLayout, MainLayout, ChatLayout, DashBoardLayout
├── pages/
│   ├── auth/           # Welcome, SignIn, SignUp, OTP, Done, Forget/New/ChangePassword
│   ├── landing/        # LandingPage and its sections (AboutUs, OurServices, etc.)
│   ├── main/           # Patient main app (Home, Consultation, DoctorDetails, BookingDetails, Alarm, Reminder, Suggestions, Profile)
│   └── dashboard/      # Admin/doctor dashboard (HomeDashboard, Doctors, Patients, ConsultationEmails)
├── routers/            # Central route configuration (`index.tsx`) and route guards
├── style/              # CSS Modules for pages, layouts, and UI components
├── utils/              # Cross‑cutting utilities (e.g., alarm reminder helpers)
└── validation/         # Form validation schemas and helpers
```

The routing entrypoint is `Routers` (`src/routers/index.tsx`), which wires layouts and protected routes into the `App` component.

### Backend (`/backend`)

```text
backend/
├── app/
│   ├── Http/Controllers/   # API controllers (Auth, Chat, Doctors, Patients, Comments, Password, Reminders, Stats, FastApi)
│   ├── Http/Middleware/    # Role‑based and auth middleware (e.g., AdminOrDoctorMiddleware)
│   └── Models/             # Domain models (Doctor, Patient, Appointment, Reservations, Reminders, Chat, Comments)
├── database/
│   └── migrations/         # Full migration history for doctors, patients, comments, reminders, appointments, chat tables, etc.
├── routes/
│   └── api.php             # API routes, Sanctum groups, and public endpoints
└── composer.json           # Laravel 11 config + dev script to run a multi‑service dev environment
```

The Laravel layer is where most **complex application logic** lives: enforcing appointment availability, managing multi‑type reminders, securing chat and admin endpoints, and aggregating platform statistics.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Mohamed-Mos-aad/Graduation-Project.git
cd Graduation-Project
```

### 2. Frontend (React + Vite)

**Prerequisites**

- Node.js ≥ 18
- npm (or pnpm/yarn, if you adapt the commands)

**Install & run**

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173` by default.

**Environment variables (example)**

Create a `.env` file in the project root (or `.env.local`) with values such as:

```bash
VITE_API_BASE_URL=http://127.0.0.1:8000/api
VITE_AI_API=http://127.0.0.1:8001
VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
# ...any other Firebase or service keys you use
```

### 3. Backend (Laravel 11 API)

**Prerequisites**

- PHP ≥ 8.2
- Composer
- A running SQL database (e.g., MySQL)

**Install & bootstrap**

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

Configure your **database** and **mail** settings in `.env`, then run migrations:

```bash
php artisan migrate        # add --seed if you have seeders
php artisan serve
```

The API will run by default on `http://127.0.0.1:8000`.

> The Laravel backend is responsible for the “heavy lifting”: it enforces business rules for bookings and reminders, secures admin and doctor operations, and coordinates chat and comment workflows through its models, controllers, and middleware.

### 4. AI Service (Optional but Recommended)

The React frontend assumes an **AI image analysis service** reachable via `VITE_AI_API` and the `/analyze/` endpoint (see `src/api/main/aiApi.tsx`). You can:

- Plug in your own FastAPI or other service that accepts an image `FormData`, returns JSON or an annotated image, and sets a `classification` header.
- Or disable AI‑related UI paths if you are only interested in the core web app and Laravel API.

---

## 📜 Available Scripts

### Frontend (`package.json`)

- **`npm run dev`**: Start the Vite dev server.
- **`npm run build`**: Type‑check with `tsc` and build the production bundle.
- **`npm run lint`**: Run ESLint over the project.
- **`npm run preview`**: Preview the built app locally.
- **`npm run predeploy`**: Build the app before deployment (used by `deploy`).
- **`npm run deploy`**: Deploy the frontend to GitHub Pages using `gh-pages`.

### Backend (`backend/composer.json`)

- **`composer dev`** (custom): Disables process timeout and starts a multi‑service dev setup using `npx concurrently`:
  - `php artisan serve`
  - `php artisan queue:listen --tries=1`
  - `php artisan pail --timeout=0`
  - `npm run dev` (frontend)

You can also use standard Laravel commands:

- `php artisan migrate`, `php artisan db:seed`
- `php artisan queue:listen`, `php artisan schedule:run`, etc.

---

## 🤝 Contribution Guide

Kleitech is structured to be easy to explore and extend. Contributions are welcome — from UI polish and accessibility tweaks to new backend endpoints or AI capabilities.

1. **Fork** the repository on GitHub.
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`.
3. **Implement** your changes with clear commit messages and passing lint checks.
4. **Add/Update** any relevant documentation (README sections, comments for complex business rules, etc.).
5. **Open a Pull Request** describing:
   - What you changed.
   - Which flows are impacted (auth, chat, appointments, reminders, AI, dashboard, etc.).
   - How reviewers can test the change.

For complex areas (e.g., chat flows, reminder scheduling, appointment reservation rules, or AI integration), please include a short architectural note in your PR to make review easier.

---

## 📬 Contact

- **Author**: Mohamed Ahmed  
- **Email**: `ma3268787@gmail.com`  
- **GitHub**: [`@Mohamed-Mos-aad`](https://github.com/Mohamed-Mos-aad)

If you are a **recruiter** or **engineering lead** evaluating this project, feel free to reach out — the repository is intentionally structured to highlight real‑world, production‑style frontend patterns and non‑trivial Laravel business logic.

## 💧 Kleitech – Smart Kidney Care Platform

**Kleitech** is a full‑stack smart healthcare platform for kidney patients that combines a modern React + TypeScript frontend, a robust Laravel 11 REST API, and an AI image‑analysis service. It focuses on real‑world patient workflows: secure onboarding, medical image triage, appointment booking, reminder automation, and rich communication between patients, doctors, and admins.

The project is designed as a **production‑style graduation project** that showcases complex business logic, layered architecture, and clean frontend state management — making it suitable for both recruiters and contributors to explore.

---

## 📚 Table of Contents

- **[Project Overview](#-project-overview)**
- **[Tech Stack](#-tech-stack)**
- **[Key Features](#-key-features)**
- **[Project Structure](#-project-structure)**
- **[Installation & Setup](#-installation--setup)**
- **[Available Scripts](#-available-scripts)**
- **[Contribution Guide](#-contribution-guide)**
- **[Contact](#-contact)**

---

## 🩺 Project Overview

Kleitech helps kidney patients stay on top of their care by integrating:

- **Patient‑facing web app** built with React, TypeScript, and Vite.
- **Secure Laravel 11 API** with Sanctum, role‑based authorization, and structured domain models for patients, doctors, chats, appointments, reminders, and comments.
- **AI image analysis pipeline** (via a separate FastAPI service) that classifies uploaded medical images and streams results back to the UI.

The frontend is organized around layouts (`landing`, `auth`, `main`, `dashboard`, `chat`), while the backend exposes a rich set of REST endpoints (`/register`, `/login`, chat, appointments, reminders, stats, comments, etc.) wired through dedicated controllers and middleware. The Laravel backend concentrates most of the **complex domain logic**: enforcing booking rules, guarding admin/doctor actions, managing reminders, and orchestrating chat flows across multiple models and middlewares.

---

## 🛠 Tech Stack

### 🔷 Frontend

- ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white) **React 18**
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white) **TypeScript**
- ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white) **Vite**
- ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2-764ABC?logo=redux&logoColor=white) **Redux Toolkit** (`src/app/slices`)
- ![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white) **React Router v7** (`src/routers`)
- ![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?logo=css3&logoColor=white) **CSS Modules** for scoped styling (`src/style`)
- ![Firebase](https://img.shields.io/badge/Firebase-11-FFCA28?logo=firebase&logoColor=black) **Firebase** for messaging/notifications config
- ![Axios](https://img.shields.io/badge/Axios-1-5A29E4?logo=axios&logoColor=white) **Axios** for HTTP clients (`src/api/**`)
- ![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?logo=socketdotio&logoColor=white) **Socket.IO** for real‑time features (chat presence/feedback)

### 🟢 Backend

- ![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?logo=php&logoColor=white) **PHP 8.2**
- ![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white) **Laravel 11** (`backend/`)
- ![Sanctum](https://img.shields.io/badge/Laravel%20Sanctum-4-FF2D20?logo=laravel&logoColor=white) **Laravel Sanctum** for API auth
- **MySQL / SQL database** via Laravel migrations and Eloquent models

**Core backend models and logic**:

- Domain models:
  - `Doctor`, `Patient`, `Appointment`, `Reservation`
  - `MedicationReminder`, `WaterReminder`, `DialysisReminder`
  - `Message`, `MessageReaction`, `Comment`
- Controllers orchestrating non‑trivial flows:
  - `AuthController`, `ChatController`, `DoctorController`, `PatientController`
  - `AppointmentController`, `ReminderController`, `StatsController`
  - `CommentsController`, `ResetPasswordController`, `FastApiController`
- Custom middlewares and policies for:
  - Admin‑only operations (e.g., managing doctors, patients, stats)
  - Doctor‑or‑admin scopes (`AdminOrDoctorMiddleware`)
  - Patient‑only update flows (profile, comments, reminders)

### 🔴 AI & Services

- ![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white) **Python + FastAPI** (external service, consumed via `aiApi.tsx`)
- `html2canvas` and custom logic to render/return annotated images
- `date-fns` for robust date/time utilities (e.g., reminders scheduling)

### 🧰 Tooling & DX

- ![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white) **ESLint** + `@typescript-eslint` for strict linting
- GitHub Pages deployment (`npm run deploy`)
- Composer scripts to bootstrap Laravel and run a unified dev environment

---

## ✨ Key Features

- **End‑to‑End Auth & Security**
  - Registration, login, logout, password reset with OTP emails.
  - Laravel Sanctum‑protected routes covering chat, doctors, patients, reminders, stats, and more (`backend/routes/api.php`).
  - Guarded dashboard routes and auth‑aware layouts on the frontend (`ProtectAuthRoutes`, `ProtectMainRoutes`, `ProtectDashboardRoutes`).

- **Doctor–Patient Chat with Rich UX**
  - Chat sessions, message listing, editing, deleting, and reactions handled in `ChatController` and related Eloquent models.
  - Frontend chat experience built from `ChatLayout`, `ChatHeader`, `ChatMessages`, `ChatFooter`, `ChatListItem`, emoji picker, and reactions.
  - Backend encapsulates complex chat life‑cycle rules, reaction handling, and participant permissions.

- **Intelligent Medical Image Analysis (AI)**
  - Patients can upload X‑ray/scan images directly from the home/consultation flows.
  - `clsPhoto` in `src/api/main/aiApi.tsx` sends images to the AI service, tracks upload progress, and interprets both **JSON results** and **image blobs** with a `classification` header.
  - UI orchestrates upload state, progress bars, error handling, and rendering AI‑annotated images.

- **Appointments, Booking & Admin Dashboard**
  - Backend endpoints such as:
    - `GET /appointments/available/{doctor_id}`
    - `POST /appointments/reserve/{appointment_id}`
  - Admin/doctor dashboards (`HomeDashboard`, `Doctors`, `Patients`, `ConsultationEmails`) provide:
    - Doctor/patient management.
    - Consultation email triage and response workflows.
    - Stats aggregation via `StatsController`.
  - Role‑based middleware ensures only the right roles can book, approve, or modify critical data.

- **Multi‑Channel Reminders & Notifications**
  - Laravel models and `ReminderController` handle **medication**, **water**, and **dialysis** reminders.
  - Frontend flows under `/m/alarm` and `/m/reminder` with specialized components (`MedicineAlarm`, `WaterAlarm`, `XRayAlarm`).
  - Utility logic (`src/utils/alarmReminder.ts` + `date-fns`) keeps reminders consistent, time‑zone aware, and user friendly.

- **Landing, Marketing & Contact Flows**
  - Structured landing sections: `AboutUs`, `Benefit`, `OurServices`, `PatientReviews`, `JoinUs`, `ContactUs`.
  - `ContactUsForm` integrates with `@emailjs/browser` for sending consultation and contact emails.
  - Designed to clearly communicate value to both patients and stakeholders.

---

## 📁 Project Structure

### Frontend (`/src`)

src/
├── api/                # Typed Axios clients for auth, main flows, doctors, chat, comments, AI, etc.
├── app/
│   └── slices/         # Redux Toolkit slices (auth, OTP, done page, main AI data, UI state, dashboard)
├── assets/
│   ├── icons/          # SVG icon sets (navbar, UI, main pages)
│   ├── images/         # Static images and illustrations
│   └── ...             # Dashboard and other visual assets
├── components/
│   ├── chat/           # Chat shell (list, header, messages, footer) and chat‑specific widgets
│   ├── dashboard/      # Admin/doctor dashboard widgets (tables, search input, modals, popups)
│   ├── landing/        # Reusable landing sections and headers
│   └── ui/             # Inputs, password fields, booking modals, toasts, loaders, chat bubbles, etc.
├── constants/          # Static texts/config (e.g., landing copy)
├── data/               # Local mock/static data used by the UI
├── firebase/           # `firebase-config.ts` for Firebase initialization
├── hooks/              # Custom hooks such as `useMessagePop` and other UI/state hooks
├── interfaces/         # Shared TypeScript interfaces and types
├── layouts/            # Layout shells: LandingPageLayout, AuthLayout, MainLayout, ChatLayout, DashBoardLayout
├── pages/
│   ├── auth/           # Welcome, SignIn, SignUp, OTP, Done, Forget/New/ChangePassword
│   ├── landing/        # LandingPage and its sections (AboutUs, OurServices, etc.)
│   ├── main/           # Patient main app (Home, Consultation, DoctorDetails, BookingDetails, Alarm, Reminder, Suggestions, Profile)
│   └── dashboard/      # Admin/doctor dashboard (HomeDashboard, Doctors, Patients, ConsultationEmails)
├── routers/            # Central route configuration (`index.tsx`) and route guards
├── style/              # CSS Modules for pages, layouts, and UI components
├── utils/              # Cross‑cutting utilities (e.g., alarm reminder helpers)
└── validation/         # Form validation schemas and helpers
The routing entrypoint is Routers (src/routers/index.tsx), which wires layouts and protected routes into the App component.
Backend (/backend)
backend/├── app/│   ├── Http/Controllers/   # API controllers (Auth, Chat, Doctors, Patients, Comments, Password, Reminders, Stats, FastApi)│   ├── Http/Middleware/    # Role‑based and auth middleware (e.g., AdminOrDoctorMiddleware)│   └── Models/             # Domain models (Doctor, Patient, Appointment, Reservations, Reminders, Chat, Comments)├── database/│   └── migrations/         # Full migration history for doctors, patients, comments, reminders, appointments, chat tables, etc.├── routes/│   └── api.php             # API routes, Sanctum groups, and public endpoints└── composer.json           # Laravel 11 config + dev script to run a multi‑service dev environment
The Laravel layer is where most complex application logic lives: enforcing appointment availability, managing multi‑type reminders, securing chat and admin endpoints, and aggregating platform statistics.
⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/Mohamed-Mos-aad/Graduation-Project.gitcd Graduation-Project
2. Frontend (React + Vite)
Prerequisites
Node.js ≥ 18
npm (or pnpm/yarn, if you adapt the commands)
Install & run
npm installnpm run dev
The app will be available at http://localhost:5173 by default.
Environment variables (example)
Create a .env file in the project root (or .env.local) with values such as:
VITE_API_BASE_URL=http://127.0.0.1:8000/apiVITE_AI_API=http://127.0.0.1:8001VITE_FIREBASE_API_KEY=YOUR_KEYVITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAINVITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID# ...any other Firebase or service keys you use
3. Backend (Laravel 11 API)
Prerequisites
PHP ≥ 8.2
Composer
A running SQL database (e.g., MySQL)
Install & bootstrap
cd backendcomposer installcp .env.example .envphp artisan key:generate
Configure your database and mail settings in .env, then run migrations:
php artisan migrate        # add --seed if you have seedersphp artisan serve
The API will run by default on http://127.0.0.1:8000.
> The Laravel backend is responsible for the “heavy lifting”: it enforces business rules for bookings and reminders, secures admin and doctor operations, and coordinates chat and comment workflows through its models, controllers, and middleware.
4. AI Service (Optional but Recommended)
The React frontend assumes an AI image analysis service reachable via VITE_AI_API and the /analyze/ endpoint (see src/api/main/aiApi.tsx). You can:
Plug in your own FastAPI or other service that accepts an image FormData, returns JSON or an annotated image, and sets a classification header.
Or disable AI‑related UI paths if you are only interested in the core web app and Laravel API.
📜 Available Scripts
Frontend (package.json)
npm run dev: Start the Vite dev server.
npm run build: Type‑check with tsc and build the production bundle.
npm run lint: Run ESLint over the project.
npm run preview: Preview the built app locally.
npm run predeploy: Build the app before deployment (used by deploy).
npm run deploy: Deploy the frontend to GitHub Pages using gh-pages.
Backend (backend/composer.json)
composer dev (custom): Disables process timeout and starts a multi‑service dev setup using npx concurrently:
php artisan serve
php artisan queue:listen --tries=1
php artisan pail --timeout=0
npm run dev (frontend)
You can also use standard Laravel commands:
php artisan migrate, php artisan db:seed
php artisan queue:listen, php artisan schedule:run, etc.
🤝 Contribution Guide
Kleitech is structured to be easy to explore and extend. Contributions are welcome — from UI polish and accessibility tweaks to new backend endpoints or AI capabilities.
Fork the repository on GitHub.
Create a feature branch: git checkout -b feature/your-feature-name.
Implement your changes with clear commit messages and passing lint checks.
Add/Update any relevant documentation (README sections, comments for complex business rules, etc.).
Open a Pull Request describing:
What you changed.
Which flows are impacted (auth, chat, appointments, reminders, AI, dashboard, etc.).
How reviewers can test the change.
For complex areas (e.g., chat flows, reminder scheduling, appointment reservation rules, or AI integration), please include a short architectural note in your PR to make review easier.
📬 Contact
Author: Mohamed Ahmed
Email: ma3268787@gmail.com
GitHub: @Mohamed-Mos-aad
If you are a recruiter or engineering lead evaluating this project, feel free to reach out — the repository is intentionally structured to highlight real‑world, production‑style frontend patterns and non‑trivial Laravel business logic.
```