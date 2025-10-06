Netflix-Style Portfolio

A modern, Netflix-inspired portfolio showcasing projects, resumes, blogs, and user analytics — built with a modular, scalable architecture in mind.

Note: This repository currently outlines the full architecture and tech plan. Implementation is ongoing.

🎯 Project Goals

Showcase portfolio items, resume, and blogs in a smooth, interactive UI

Provide user authentication with social logins

Track user interactions, clicks, and profile views


🏗️ Architecture Overview
Frontend (UI)
 └─ Next.js 14 + React 18
 └─ Tailwind CSS + Framer Motion
 └─ Deployed on Vercel

API Gateway Layer
 └─ Implemented as Next.js API Routes or a separate NestJS backend

Services
 ├─ User Auth Service
 │   └─ Clerk / NextAuth, JWT, social login
 ├─ Portfolio Service
 │   └─ Projects, resume, blogs
 └─ Analytics Service
     └─ Tracks profile views, clicks, interactions

Data Stores
 ├─ PostgreSQL: users, projects, resume, blogs
 ├─ Redis: trending projects, recently viewed items
 └─ Meilisearch: fast text search for projects/skills

DevOps & Monitoring
 ├─ Docker + GitHub Actions CI/CD
 ├─ Hosting: Vercel (frontend) + Railway/Render (backend)
 └─ Observability: Sentry (errors), Grafana Cloud (metrics)


🧰 Tech Stack

Frontend: Next.js 14, React 18, Tailwind CSS, Framer Motion
Backend: Next.js API Routes / NestJS
Databases: PostgreSQL, Redis, Meilisearch
Auth: Clerk / NextAuth
DevOps: Docker, GitHub Actions, Vercel, Railway/Render
Monitoring: Sentry, Grafana Cloud

🌱 Status

- Architecture defined

- Frontend scaffolding planned

- Backend microservices design completed

- CI/CD and observability pipelines planned
