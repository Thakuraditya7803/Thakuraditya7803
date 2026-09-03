# 🚀 Aditya Singh Thakur - Data Engineer Portfolio

A modern, dynamic, and interactive personal portfolio website built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-teal) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-purple)

## ✨ Features

- 🎨 **Modern Design** - Dark/Light mode with smooth transitions
- 🌊 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎯 **Interactive Elements** - Hover effects, flip cards, and scroll animations
- 🎭 **Dynamic Content** - Rotating taglines and animated backgrounds

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** JavaScript

## 📂 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # Custom styles
│   ├── index.css       # Global styles with Tailwind
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
      dark: { ... }
    }
  }
}
```

### Content

Update personal information in the component files:
- **Hero.jsx** - Name, title, taglines
- **About.jsx** - Bio, skills
- **Experience.jsx** - Work experience
- **Projects.jsx** - Project details
- **Education.jsx** - Education and certifications
- **Contact.jsx** - Contact information

### Social Links

Update social media links in `Hero.jsx` and `Contact.jsx`

## 📱 Sections

1. **Hero** - Animated landing with rotating taglines and CTA buttons
2. **About** - Bio and technical skills with animated chips
3. **Experience** - Interactive timeline of work experience
4. **Projects** - Flip cards showcasing projects with tech stacks
5. **Education** - Education history and certifications carousel
6. **Contact** - Contact form and social links

## 🌙 Dark Mode

Toggle between light and dark themes using the button in the navigation bar. Theme preference is automatically applied based on system preferences.

## ⚡ Performance

- Fast page loads with Vite
- Optimized animations with Framer Motion
- Lazy loading for better performance
- Responsive images and assets

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Aditya Singh Thakur**
- Email: adityathakur7803@gmail.com
- Phone: +91-8793937803
- Location: Chandrapur, Maharashtra, India

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
