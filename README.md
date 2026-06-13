# 🚀 Aditya Ranjan --” Next-Gen Portfolio Website

A modern, animation-rich developer portfolio built with **React 19**, **Vite**, **GSAP**, and **SCSS**. Showcasing full-stack projects, certifications, skills, and a responsive, interactive UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-1.100-CC6699?logo=sass&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## âœ¨ Features

- âš¡ **Blazing Fast** â€” Powered by Vite for instant HMR and optimized production builds
- ðŸŽ¬ **Smooth Animations** â€” GSAP-powered scroll-triggered and timeline animations
- ðŸ“± **Fully Responsive** â€” Mobile-first design that looks great on all devices
- ðŸŽ¨ **Modern UI/UX** â€” Clean, minimal aesthetic with SCSS styling
- ðŸ”¤ **Text Animations** â€” Split-type character animations for engaging typography
- ðŸŽ¯ **React 19** â€” Latest React features with modern hooks and patterns
- ðŸŒˆ **Dynamic Colors** â€” ColorJS integration for adaptive theming
- ðŸ”— **Social Links** â€” Integrated contact and social media connections

---

## ðŸ›  Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | SCSS (Sass Embedded) |
| **Animations** | GSAP 3 + @gsap/react |
| **Text Effects** | Split-Type |
| **Color Utils** | ColorJS.io |
| **Icons** | React Icons |
| **Linting** | ESLint 10 + React Hooks + React Refresh |

---

## ðŸ“ Project Structure

```
portfolio/
â”œâ”€â”€ public/                 # Static assets (images, favicon, logos)
â”‚   â””â”€â”€ ar-logo.png         # Site favicon/logo
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/         # Reusable UI components
â”‚   â”œâ”€â”€ sections/           # Page sections (Hero, About, Projects, etc.)
â”‚   â”œâ”€â”€ hooks/              # Custom React hooks
â”‚   â”œâ”€â”€ styles/             # SCSS partials and global styles
â”‚   â”œâ”€â”€ utils/              # Helper functions
â”‚   â”œâ”€â”€ App.jsx             # Root application component
â”‚   â””â”€â”€ main.jsx            # Application entry point
â”œâ”€â”€ index.html              # HTML entry point
â”œâ”€â”€ vite.config.js          # Vite configuration
â”œâ”€â”€ eslint.config.js        # ESLint flat config
â”œâ”€â”€ package.json            # Dependencies & scripts
â””â”€â”€ README.md               # You are here!
```

---

## ðŸš€ Getting Started

### Prerequisites

- **Node.js** â‰¥ 18.0.0
- **npm** â‰¥ 9.0.0 (or **yarn** / **pnpm**)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Portfolio-Website-Using-React.js.git

# Navigate to project directory
cd Portfolio-Website-Using-React.js

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173` (default Vite port).

---

## ðŸ“œ Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Create optimized production build |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint on all source files |

---

## ðŸ— Build for Production

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory, ready for deployment on:
- **Vercel** â€” `vercel --prod`
- **Netlify** â€” Drag & drop `dist/` folder
- **GitHub Pages** â€” Use `gh-pages` branch
- **Any static host** â€” Upload `dist/` contents

---

## ðŸŽ¨ Customization Guide

### Updating Personal Information

1. **Name & Title** â€” Edit `index.html` `<title>` tag and `src/sections/Hero.jsx`
2. **Projects** â€” Update data in `src/data/projects.js` (or equivalent)
3. **Skills** â€” Modify `src/sections/Skills.jsx` or skill data file
4. **Contact Links** â€” Update social URLs in `src/sections/Contact.jsx`
5. **Resume** â€” Replace `public/resume.pdf` with your own

### Changing Colors / Theme

The project uses **SCSS variables** for theming. Edit:

```scss
// src/styles/_variables.scss
$primary-color: #your-color;
$accent-color: #your-accent;
$bg-dark: #your-background;
```

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.jsx`
3. Add corresponding styles in `src/styles/`

---

## ðŸ§© Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.2.6 | UI library |
| `react-dom` | ^19.2.6 | React DOM renderer |
| `vite` | ^8.0.12 | Build tool & dev server |
| `gsap` | ^3.15.0 | Animation engine |
| `@gsap/react` | ^2.1.2 | GSAP React integration |
| `split-type` | ^0.3.4 | Text splitting for animations |
| `react-icons` | ^5.6.0 | Icon library |
| `colorjs.io` | ^0.6.1 | Color manipulation |
| `sass-embedded` | ^1.100.0 | SCSS compiler |

---

## ðŸ”§ ESLint Configuration

This project uses the new **ESLint Flat Config** format:

- **Base**: `@eslint/js` recommended rules
- **React**: React Hooks + React Refresh plugins
- **Globals**: Browser environment enabled
- **Ignored**: `dist/` directory excluded

To add custom rules, edit `eslint.config.js`:

```js
{
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn',
  }
}
```

---

## ðŸ“¸ Screenshots

> _Add screenshots of your portfolio sections here_

| Hero Section | Projects Section | Contact Section |
|-------------|------------------|-----------------|
| ![Hero](screenshots/hero.png) | ![Projects](screenshots/projects.png) | ![Contact](screenshots/contact.png) |

---

## ðŸŒ Live Demo

ðŸ”— **View Live**: [https://your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)

---

## ðŸ¤ Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## ðŸ“„ License

This project is licensed under the **MIT License** â€” feel free to use it as a template for your own portfolio.

---

## ðŸ™ Acknowledgments

- [Vite](https://vitejs.dev/) â€” Next-generation frontend tooling
- [GSAP](https://greensock.com/gsap/) â€” Professional-grade web animation
- [React](https://react.dev/) â€” The library for web and native user interfaces
- [React Icons](https://react-icons.github.io/react-icons/) â€” Popular icons for React

---

## ðŸ“¬ Contact

**Aditya Ranjan**

- ðŸ“§ Email: [aditya.ranjan13658683@gmail.com](mailto:aditya.ranjan13658683@gmail.com)
- ðŸ’¼ LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- ðŸ™ GitHub: [Your GitHub](https://github.com/yourusername)
- ðŸ“± Phone: +91-8198074264

---

> â­ **Star this repo** if you found it helpful or used it as inspiration for your own portfolio!
avatar
Ask In Chat
Ask In Chat
