
# CodeRise Academy Website

![CodeRise Academy Logo](./src/assets/codeRiseAcademyLogo.jpeg)

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Folder Structure](#folder-structure)  
- [Future Enhancements](#future-enhancements)  
- [License](#license)  

---

## Project Overview

The **CodeRise Academy Website** is a modern, responsive web application designed for an educational academy. It provides users with information about programs, services, and contact channels, including a fully functional contact form integrated with **EmailJS** for direct Gmail notifications.  

The website emphasizes clean design, accessibility, and responsive layouts for both desktop and mobile users.

---

## Features

- **Multi-page navigation** with `React Router DOM`  
- **Responsive UI** built with React and TailwindCSS  
- **Contact form** integrated with EmailJS to send submissions directly to `coderiseacademy04@gmail.com`  
- **Interactive contact info section** with icons and actionable links  
- **Social media integration** (Facebook, Twitter, Instagram, LinkedIn)  
- **Dynamic FAQ section** and planned interactive map  
- **Hero sections and gradient backgrounds** for a professional aesthetic  
- **Feedback notifications** after form submission  

---

## Technologies

- **Frontend:** React 18, TailwindCSS, Lucide Icons  
- **Routing:** React Router DOM  
- **Email Integration:** EmailJS  
- **Tooling:** Vite, npm  
- **Version Control:** Git/GitHub  

---

## Folder Structure

coderise-academy/
│
├─ public/                # Static assets (favicon, public images)
├─ src/
│  ├─ assets/             # Images, logos
│  ├─ components/         # Header, Footer, Layout, etc.
│  ├─ pages/              # HomePage, ProgramsPage, AboutPage, ContactPage
│  ├─ app/
│  │  ├─ App.tsx
│  │  └─ routes.tsx
│  └─ main.tsx            # React entry point
├─ package.json
├─ tailwind.config.js
├─ vite.config.ts
└─ README.md

---

## Future Enhancements

- Fully interactive map for the contact section
- Newsletter subscription integration
- Animated scroll-based sections and micro-interactions
- SEO and performance optimization for production
