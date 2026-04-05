# mr. festin — Artist Portfolio Website
A modern, editorial, neon‑accented portfolio site built with React.

The mr. festin website is a custom‑designed portfolio and creative playground built for the Bay Area artist who works under the pen name mr. festin. The site blends intentional editorial design, modernist typography, and a neon‑accented visual identity with a clean, component‑driven React architecture.

This project was designed and developed by Mary Fobbs‑Guillory, combining UI/UX design, front‑end engineering, and creative direction to build a cohesive digital identity for the artist.

## ✨ Features
🎨 Editorial, Intentional UI
Full‑bleed hero image with soft fade‑in

Minimalist navigation with custom branding

Modernist typography using Stardos Stencil + Martel Sans

Neon‑accented palette with teal, pink, purple, and lime

Generous whitespace and gallery‑ready layout

## 🖼️ Artist Portfolio
About page with a crafted artist bio

Space for artwork galleries and future collections

Shop page with categories for Stickers, Prints, and Original Artwork

## 📝 Blog System
Animated blog cards with accent bars

Tag‑based filtering with accessible hover states

Rich content support (PullQuotes, paragraphs, future MDX support)

Theme‑aware accent system (teal, pink, purple, lime)

## 🏷️ Custom Tag Component
Accent‑driven border + hover background

Theme‑aware readable text (light + dark)

Fully interactive filtering

Clean, reusable component API

## 🌗 Theme Support
Light + dark mode via CSS variables

Automatic hover text contrast

Accent colors adapt per theme (purple → lime)

## 📁 Project Structure
Code
src/
  components/
    Tag.tsx
    Tag.css
    PullQuote.tsx
  pages/
    Home.tsx
    About.tsx
    Shop.tsx
    Blog.tsx
  assets/
    hero/
    artwork/
  theme/
    variables.css
  App.tsx
  main.tsx
## 🚀 Getting Started
Install dependencies
bash
npm install
Run the development server
bash
npm run dev
Open the site
Code
http://localhost:5173
## 🧩 Key Components
### Tag Component
A fully theme‑aware, accent‑driven tag used across the blog and future gallery pages.

Border color = accent

Hover background = accent

Text color = theme‑controlled

Accessible in both light + dark modes

### PullQuote Component
A stylized blockquote with accent border and editorial spacing.

### Blog Architecture
Posts defined as structured objects

Optional rich content blocks

Animated reveal on scroll

Tag filtering with smooth transitions

### Hero Section
Full‑bleed image

Soft fade‑in animation

Customizable overlay text

## 🎨 Theme + Accent System
Defined in variables.css:

css
:root {
  --accent-teal: #00c7b7;
  --accent-pink: #ff2fa0;
  --accent-purple: #7b4bff;
  --accent-lime: #baff00;

  --tag-hover-text: #fff;
}

[data-theme="dark"] {
  --tag-hover-text: #111;
}
The site uses a neon‑accented palette that adapts to theme mode, ensuring readability and visual consistency.

## 🧠 Technical Highlights
Component‑driven architecture with React + Vite

CSS variables for theme + accent control

TypeScript‑safe inline CSS variable usage

Smooth animations using CSS keyframes + transitions

Clean separation of layout, components, and theme logic

Accessible color contrast across all tag states

## Screenshots
Homepage in Dark and Light mode
<img width="1885" height="1001" alt="Screenshot 2026-04-04 at 11 26 21 AM" src="https://github.com/user-attachments/assets/6f740dae-d581-4cba-9b98-7648b5600d9e" />
<img width="1902" height="916" alt="Screenshot 2026-04-04 at 11 26 30 AM" src="https://github.com/user-attachments/assets/8a13065e-bbf8-4af2-9ac4-f55aa36ec216" />

About Page
<img width="1601" height="878" alt="Screenshot 2026-04-04 at 8 05 45 PM" src="https://github.com/user-attachments/assets/61577537-6272-4a95-b66d-a5f6ceb8bfca" />

Gallery
<img width="1796" height="1044" alt="Screenshot 2026-04-04 at 11 27 10 AM" src="https://github.com/user-attachments/assets/5f80e2f0-457f-4e7a-9d5e-7538f0d618da" />

Contact Form
<img width="1827" height="1072" alt="Screenshot 2026-04-04 at 11 27 19 AM" src="https://github.com/user-attachments/assets/e343836c-ac2d-4a65-89c0-910ad5b5664b" />

Blog
<img width="1540" height="868" alt="Screenshot 2026-04-04 at 8 05 23 PM" src="https://github.com/user-attachments/assets/d512aa8e-9db1-4fd1-b818-3de5add28eb8" />


Shopping Page
<img width="1845" height="1040" alt="Screenshot 2026-04-04 at 11 27 41 AM" src="https://github.com/user-attachments/assets/d75b9173-2e2f-48a1-b7c5-265d088b841e" />

Cart Drawer
<img width="1852" height="938" alt="Screenshot 2026-04-04 at 11 27 51 AM" src="https://github.com/user-attachments/assets/d9c2694c-7c90-484b-8e4c-e03b963061e8" />

## 📌 Roadmap
Add artwork gallery with lightbox + swipe navigation

Add animated transitions between pages

MDX or CMS support for blog posts

Netlify form integration for a Contact page

Expand Shop with product detail pages

Add micro‑interactions (hover glow, bounce, subtle motion)

Add accessibility improvements (focus rings, reduced‑motion mode)

Add a curated “Projects” or “Works in Progress” section

Add a theme toggle animation (neon flicker, soft fade, etc.)

## 👩‍💻 Developer
Mary Fobbs‑Guillory  
Library professional → junior software engineer
Focused on editorial UI, neon‑accented design, and accessible web experiences.
