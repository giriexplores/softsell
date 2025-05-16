# SoftSell

A single-page responsive marketing website for SoftSell, a fictional software resale startup.

## 🚀 Live Demo

[https://softsell.vercel.app](https://softsell.vercel.app)

## 📂 Github Repository

[https://github.com/giriexplores/softsell](https://github.com/giriexplores/softsell)

---

## 📝 Features Implemented

- **Hero Section**

  - Two-column layout with headline, subheading, CTA button and demo image
  - Solid light/dark-mode-aware background (no gradient)

- **How It Works**

  - Three steps: Upload License → Get Valuation → Get Paid
  - Responsive cards with Heroicons

- **Why Choose Us**

  - Four key differentiators (Best Market Rates, Secure Transactions, 24/7 Support, Fast Payouts)
  - Responsive grid with icons and descriptions

- **Customer Testimonials**

  - Two dummy reviews with name, role, company
  - Light/dark-mode styling

- **Contact / Lead Form**

  - Fields: Name, Email, Company, License Type (dropdown), Message
  - Frontend validation via `react-hook-form`
  - Success message on submit

- **Navbar**

  - Logo, search bar, “Get Quote” & “Contact Us” buttons, dark-mode toggle
  - Mobile-responsive hamburger menu

- **Dark / Light Mode Toggle**

  - Class-based Tailwind dark mode
  - Persists user preference in `localStorage`

- **SEO & Meta Tags**

  - `<title>`, `<meta name="description">`
  - Open Graph & Twitter Card tags
  - Favicon in `/public`

- **Animations**

  - Section fade-in on scroll via Framer Motion + Intersection Observer
  - Card hover scale for visual polish

- **AI-Style Chat Widget**
  - Floating chat bubble
  - Canned LLM-like responses for common questions
  - Mobile/desktop support, light/dark mode

---

## 🎨 Design Choices

- **Framework & Build**:

  - React + Vite for fast startup and HMR
  - Tailwind CSS for utility-first styling

- **Layout & Responsiveness**:

  - Mobile-first approach; flex and grid utilities for adaptive layouts
  - Two-column hero on large screens, stacked on mobile

- **Color Palette & Typography**:

  - Neutral whites/grays for light mode; deep grays/blacks for dark mode
  - Accent blues (`bg-blue-600`, `hover:bg-blue-700`) for CTAs
  - System font stack for fast load times and legibility

- **Icons & Imagery**:

  - Heroicons for consistency with Tailwind’s ecosystem
  - Placeholder demo image in hero (replace `public/hero-demo.png` with your own)

- **User Experience**:
  - Smooth animations to draw attention without distraction
  - Persistent dark-mode toggle in top nav
  - Inline form validation for quick feedback

---

## ⏱ Time Spent

Approximately **8–10 hours** over two days:

1. **Day 1**

   - Project setup, Hero, “How It Works”, “Why Choose Us” (4 hrs)
   - Testimonials & Contact Form (+ frontend validation) (2 hrs)

2. **Day 2**
   - Navbar + Dark Mode Toggle (1.5 hrs)
   - SEO meta tags, favicon, demo image (1 hr)
   - Animations & Chat Widget (1.5 hrs)

---

## 📦 Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Icons**: @heroicons/react
- **Forms**: react-hook-form
- **Animations**: Framer Motion
- **Deployment**: Vercel (or Netlify / GitHub Pages)

---

## 🔧 Getting Started

1. **Clone the repo**

    ```bash
    git clone https://github.com/your-username/softsell.git
    cd softsell
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run Dev Server**: Check if everything is working fine.

    ```bash
    npm run dev
    ```

4. **Build for Production**

    ```bash
    npm run build
    ```

5. **Deploy**
- Push to Github and connect to Vercel (or netlify) for automatic deploys.