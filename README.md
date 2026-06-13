# 🚀 Aditya Ranjan -- Next-Gen Portfolio Website

A modern, animation-rich developer portfolio built with **React 19**, **Vite**, **GSAP**, and **SCSS**. Showcasing full-stack projects, certifications, skills, and a responsive, interactive UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-1.100-CC6699?logo=sass&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## ✨› Features

- ⚡ **Blazing Fast** â€” Powered by Vite for instant HMR and optimized production builds
- 🎬 **Smooth Animations** â€” GSAP-powered scroll-triggered and timeline animations
- 📱 **Fully Responsive** â€” Mobile-first design that looks great on all devices
- 🎨 **Modern UI/UX** â€” Clean, minimal aesthetic with SCSS styling
- 🔤 **Text Animations** â€” Split-type character animations for engaging typography
- 🎯 **React 19** â€” Latest React features with modern hooks and patterns
- 🌈 **Dynamic Colors** â€” ColorJS integration for adaptive theming
- 🔗 **Social Links** â€” Integrated contact and social media connections

---

## 🛠›  Tech Stack

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

## 📁 Project Structure
```
portfolio/
├── public/                 # Static assets (images, favicon, logos)
│   └── ar-logo.png         # Site favicon/logo
├── src/
│   ├── components/         # Reusable UI components
│   ├── sections/           # Page sections (Hero, About, Projects, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # SCSS partials and global styles
│   ├── utils/              # Helper functions
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Application entry point
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint flat config
├── package.json            # Dependencies & scripts
└── README.md               # You are here!

```
---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >=9.0.0 (or **yarn** / **pnpm**)

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

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Create optimized production build |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint on all source files |

---

## 🏗  Build for Production

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory, ready for deployment on:
- **Vercel** --” `vercel --prod`
- **Netlify** --” Drag & drop `dist/` folder
- **GitHub Pages** --” Use `gh-pages` branch
- **Any static host** --” Upload `dist/` contents

---

## 🎨 Customization Guide

### Updating Personal Information

1. **Name & Title** --” Edit `index.html` `<title>` tag and `src/sections/Hero.jsx`
2. **Projects** --” Update data in `src/data/projects.js` (or equivalent)
3. **Skills** --” Modify `src/sections/Skills.jsx` or skill data file
4. **Contact Links** --” Update social URLs in `src/sections/Contact.jsx`
5. **Resume** --” Replace `public/resume.pdf` with your own

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

## 🧩  Key Dependencies

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

## 🔧 ESLint Configuration

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

## 📸 Screenshots

> _Add screenshots of your portfolio sections here_

| Hero Section | Projects Section | Contact Section |
|-------------|------------------|-----------------|
| ![Hero](<img width="1913" height="886" alt="image" src="https://github.com/user-attachments/assets/49261221-eeed-448c-a883-f91ea93f9d36" />)
| ![Projects](<img width="1918" height="886" alt="image" src="https://github.com/user-attachments/assets/01aa7312-9dab-4057-9fac-7cda79ded14a" />) | ![Contact](<img width="1918" height="886" alt="image" src="https://github.com/user-attachments/assets/d013457c-e729-4223-9cb7-6ba71af9c757" />)
|

---

## 🌐 Live Demo

🔗 **View Live**: (https://portfolio-website-using-react-yv42f7506.vercel.app/)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** â€” feel free to use it as a template for your own portfolio.

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) --” Next-generation frontend tooling
- [GSAP](https://greensock.com/gsap/) --” Professional-grade web animation
- [React](https://react.dev/) --” The library for web and native user interfaces
- [React Icons](https://react-icons.github.io/react-icons/) --” Popular icons for React

---

## 📬 Contact

**Aditya Ranjan**

- 📧 Email: [aditya.ranjan13658683@gmail.com](mailto:aditya.ranjan13658683@gmail.com)
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [Your GitHub](https://github.com/yourusername)
- 📱 Phone: +91-8198074264

---

> ⭐  **Star this repo** if you found it helpful or used it as inspiration for your own portfolio!
avatar
Ask In Chat
Ask In Chat
