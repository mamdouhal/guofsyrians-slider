# 🎯 Guofsyrians Slider

A modern, accessible React application featuring a dual-dropdown navigation system for exploring categorized links and resources. Built with performance and user experience in mind.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)

## ✨ Features

### 🎛️ Navigation System
- **Single-Select Dropdowns**: Hierarchical father → son category selection
- **URL State Persistence**: Bookmarkable links with hash-based routing
- **Keyboard Navigation**: Full accessibility with arrow keys, Enter, and Escape
- **Visual Feedback**: Animated dropdowns with focus states and highlights

### 🎨 Design Excellence
- **Custom Brand Theme**: Tajawal font with curated color palette
- **Responsive Layout**: Mobile-first design that scales beautifully
- **Smooth Animations**: Fade-in effects, hover states, and micro-interactions
- **Modern UI**: Rounded corners, subtle shadows, and thoughtful spacing

### ♿ Accessibility First
- **ARIA Compliance**: Proper roles, labels, and keyboard navigation
- **Screen Reader Support**: Semantic HTML with descriptive labels
- **Focus Management**: Logical tab order and visible focus indicators
- **Contrast Standards**: WCAG compliant color combinations

### 📊 Rich Content
- **4 Main Categories**: Content & Media, Development Tools, Learning Resources, Productivity Tools
- **35+ Curated Links**: Hand-picked resources across multiple domains
- **Smart Organization**: Logical subcategory groupings for easy discovery

## 🎨 Design System

### 🎭 Brand Colors
```css
--brand-dark: #214937;    /* Primary dark green for buttons and accents */
--brand-accent: #dcb557;  /* Gold for focus states and highlights */
--brand-light: #efe8d7;   /* Warm beige background */
--brand-black: #1f1f1f;   /* Rich text color */
```

### 🔤 Typography
- **Primary Font**: [Tajawal](https://fonts.google.com/specimen/Tajawal) (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)
- **Features**: Arabic and Latin script support, excellent readability

### 🎯 Interactive States
- **Hover Effects**: Subtle scale transforms and color transitions
- **Focus States**: High-contrast borders with brand accent colors
- **Active States**: Visual feedback for all interactive elements
- **Loading States**: Smooth spinners and skeleton screens

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+ 
npm or yarn or pnpm
```

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mamdouhal/guofsyrians-slider.git
   cd guofsyrians-slider/work
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
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview

# Build outputs to /dist folder for static hosting
```

## 📁 Project Architecture

```
src/
├── components/              # Reusable UI components
│   ├── ParentSelect.tsx    # Father category dropdown with accessibility
│   ├── ChildSelect.tsx     # Son category dropdown with validation
│   ├── LinksGrid.tsx       # Responsive card grid for links
│   ├── EmptyState.tsx      # Contextual empty states with animations
│   ├── Breadcrumb.tsx      # Navigation breadcrumb component
│   └── LoadingSpinner.tsx  # Loading indicator component
├── hooks/                  # Custom React hooks
│   ├── useUrlState.ts      # URL hash state management
│   └── useCatalog.ts       # Data access and validation helpers
├── data/                   # Static data and types
│   └── catalog.ts          # Category definitions and link database
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind directives
```

## 🎮 User Guide

### Basic Navigation
1. **Select Father Category**: Choose from main categories (Content, Development, Learning, Productivity)
2. **Select Son Category**: Pick a subcategory to see related links
3. **Explore Links**: Click any link card to open in a new tab
4. **Share State**: Copy the URL to share your current selection

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Navigate between dropdowns |
| `Enter` / `Space` | Open dropdown or select option |
| `↑` / `↓` | Navigate dropdown options |
| `Escape` | Close dropdown and return focus |

### URL Format
```
#parent=development&child=frameworks
```
Share this URL to show specific category combinations.

## 🛠️ Technical Stack

### Core Technologies
- **[React 18](https://react.dev/)** - Modern React with Hooks and Concurrent Features
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and enhanced DX
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling framework

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality checks
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons

### Hosting Ready
- **Static Site**: No backend required, deploy anywhere
- **CDN Optimized**: Minified assets with tree-shaking
- **Progressive Enhancement**: Works without JavaScript for basic content

## 📊 Data Structure

### Adding New Categories

Edit `src/data/catalog.ts` to add new content:

```typescript
{
  id: 'your-category',
  name: 'Your Category Name',
  children: [
    {
      id: 'subcategory',
      name: 'Subcategory Name',
      links: [
        {
          id: 'unique-link-id',
          title: 'Link Title',
          description: 'Compelling description that helps users understand the value',
          url: 'https://example.com',
          icon: '🚀' // Emoji or icon identifier
        }
      ]
    }
  ]
}
```

### Content Guidelines
- **Titles**: Clear, concise, and descriptive
- **Descriptions**: 60-120 characters explaining the resource value
- **URLs**: Prefer HTTPS and canonical URLs
- **Icons**: Use relevant emojis or consistent icon system

## 🔧 Customization

### Updating Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    dark: '#your-dark-color',
    accent: '#your-accent-color', 
    light: '#your-light-color',
    black: '#your-text-color',
  }
}
```

### Changing Typography

Update `index.html` font imports and `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'fallback', 'sans-serif'],
}
```

### Custom Animations

Add to `src/index.css`:

```css
@keyframes yourAnimation {
  /* keyframe definitions */
}

.your-animation {
  animation: yourAnimation 0.3s ease-in-out;
}
```

## 🚀 Deployment

### Static Hosting Platforms

**Vercel (Recommended)**
```bash
npm i -g vercel
vercel --prod
```

**Netlify**
```bash
npm run build
# Upload /dist folder to Netlify
```

**GitHub Pages**
```bash
npm run build
# Push /dist contents to gh-pages branch
```

### Docker Deployment

```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🧪 Testing & Quality

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests  
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

### Performance Metrics
- **First Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow code style guidelines**
5. **Add tests for new functionality**
6. **Submit a pull request**

### Code Style Guidelines

- Use TypeScript for all new code
- Follow existing component patterns
- Add proper ARIA labels for accessibility
- Write descriptive commit messages
- Update documentation for new features

### Reporting Issues

Please use the [GitHub Issues](https://github.com/mamdouhal/guofsyrians-slider/issues) tracker for:
- Bug reports with reproduction steps
- Feature requests with use cases
- Performance improvements
- Accessibility enhancements

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the excellent framework
- **Tailwind CSS** for the utility-first approach  
- **Heroicons** for beautiful iconography
- **Google Fonts** for the Tajawal typography
- **Vite Team** for the blazing-fast build tool

---

<div align="center">

**[Live Demo](http://localhost:5174)** • **[Report Bug](https://github.com/mamdouhal/guofsyrians-slider/issues)** • **[Request Feature](https://github.com/mamdouhal/guofsyrians-slider/issues)**

Made with ❤️ by [Mamdouhal](https://github.com/mamdouhal)

</div>
