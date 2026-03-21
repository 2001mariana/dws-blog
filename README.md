# 🚀 DWS Blog — Frontend Technical Challenge

This project was developed as part of the **DWS (Dentsu World Services) Frontend Recruitment Process**.

The goal was to build a responsive, pixel-perfect blog using **React**, focusing on **code quality, architecture, and maintainability**.

> ⏱️ Built within a 72-hour challenge window, prioritizing incremental delivery and clean code.

---

## 📌 Overview

This application is a **blog platform** that allows users to:

* View a list of posts
* Access detailed information about each post
* Navigate between pages seamlessly
* Interact with dynamic data from a real API

The project follows a **mobile-first approach** and emphasizes **scalability and clean architecture**.

---

## 🧠 Architecture & Design Decisions

One of the main focuses of this project was **code organization and scalability**.

The application is structured using a layered approach inspired by:

* **Clean Architecture**
* **Separation of Concerns**
* **Domain-driven design (DDD - light approach)**

### 🧩 Layers

#### 📦 Domain

Contains the core business logic and entities:

* `Post`
* `Author`
* `Category`

Also includes repository contracts:

* `PostRepositories.ts`

---

#### ⚙️ Infrastructure

Handles external communication:

* API calls using **Axios**
* HTTP abstraction via `httpClient.ts`
* Repository implementations (`PostRepository.ts`)

---

#### 🧠 Application

Responsible for state management and business orchestration:

* React Context (`PostContext.tsx`)
* Provider (`PostProvider.tsx`)
* Custom hooks:

  * `usePosts`
  * `usePost`
  * `usePostContext`

---

#### 🎨 Presentation

UI layer:

* Pages:

  * `PostListPage`
  * `PostDetailPage`
* Components:

  * `PostCard`

---

## 🔄 State Management

State is managed using **React Context API + custom hooks**, ensuring:

* Centralized state logic
* Reusability
* Clean separation from UI components

---

## 🌐 API Integration

Data is fetched from the provided endpoints:

* `/posts`
* `/posts/{id}`
* `/authors`
* `/categories`

All requests are handled through a reusable **HTTP client abstraction**.

---

## 📱 Features

* 📄 Blog post listing page
* 🔍 Post details page
* 🔗 Client-side routing with React Router
* ⚡ API integration with Axios
* ♻️ Reusable components
* 🧠 Custom hooks for logic separation
* 📱 Responsive layout (mobile-first)
* 🧪 Testing setup with Jest & Testing Library

---

## 🛠️ Tech Stack

* **React 19**
* **TypeScript**
* **Vite**
* **React Router**
* **Axios**
* **Jest + React Testing Library**
* **ESLint**

---

## 📂 Project Structure

```bash
src/
├── app/                  # App setup and routing
├── application/          # State management & hooks
├── domain/               # Business logic & entities
├── infrastructure/       # API & external services
├── presentation/         # UI (components & pages)
├── styles/               # Global styles
├── tests/                # Unit tests
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/2001mariana/dws-blog.git
cd dws-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

---

## 🎯 What This Project Demonstrates

* Strong understanding of **React and hooks**
* Ability to design **scalable frontend architecture**
* Clean separation between **domain, logic, and UI**
* Experience with **API abstraction and data flow**
* Focus on **maintainability and readability**
* Use of **TypeScript for type safety**

---

## 💭 Final Thoughts

For this challenge, I chose to go beyond just implementing the UI.

I focused on building a **scalable and maintainable architecture**, similar to what would be used in real-world production applications.

This approach allows:

* Easier feature expansion
* Better testability
* Clear separation of responsibilities

I would be very happy to walk through my decisions and explain the architecture in detail.

---

## 🙌 Thank You

Thank you for your time and for reviewing my project!
