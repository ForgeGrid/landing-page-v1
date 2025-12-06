# ForgeGrid Landing Page

A modern, responsive landing page built with React, TypeScript, and Vite. This project features a dark-themed UI with sophisticated animations, 3D graphics, and fully responsive layouts. All components are modular, reusable, and highly configurable.

## 🚀 Features

- **Modern UI/UX**: Dark-themed design with purple/blue gradient accents and smooth animations
- **3D Graphics**: Interactive 3D lanyard card with physics simulation using Three.js and Rapier
- **Animated Background**: Custom shader-based floating lines with interactive mouse effects
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Modular Architecture**: Reusable, configurable components with TypeScript types
- **Component-Based**: Clean separation of concerns with CSS Modules
- **TypeScript**: Full type safety throughout the codebase
- **Production Ready**: Organized folder structure following best practices

## 📁 Project Structure

```
landing-page/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Background/
│   │   │   │   └── WaveBackground.tsx          # Animated wave background component
│   │   │   ├── NavBar/
│   │   │   │   └── NavBar.tsx                  # Navigation bar with mobile menu
│   │   │   ├── Sections/
│   │   │   │   ├── Hero/
│   │   │   │   │   └── Hero.tsx                # Hero section with CTA buttons
│   │   │   │   └── AboutUs/
│   │   │   │       └── AboutUs.tsx             # About section with 3D lanyard
│   │   │   ├── ui/
│   │   │   │   ├── CardSwap/
│   │   │   │   │   └── CardSwap.tsx            # Card swapping animation component
│   │   │   │   ├── FloatingLines/
│   │   │   │   │   └── FloatingLines.tsx       # Shader-based floating lines
│   │   │   │   ├── Lanyard/
│   │   │   │   │   ├── Lanyard.tsx             # 3D physics-based lanyard card
│   │   │   │   │   ├── card.glb                # 3D model file
│   │   │   │   │   └── lanyard.png             # Texture file
│   │   │   │   ├── ToogleSwitch/
│   │   │   │   │   └── FloatingToogle.tsx      # Floating toggle switch
│   │   │   │   └── tooltip/
│   │   │   │       └── tooltip.tsx             # Tooltip component (Radix UI)
│   │   │   ├── css/
│   │   │   │   ├── NavBar.module.css           # Navbar styles
│   │   │   │   ├── Hero.module.css             # Hero section styles
│   │   │   │   ├── aboutUs.css                 # About section styles
│   │   │   │   └── scrollbar.css               # Custom scrollbar styles
│   │   │   └── index.ts                        # Component exports
│   │   ├── assets/
│   │   │   ├── ForgeGrid.svg                   # Logo
│   │   │   ├── arrow.png                       # Scroll arrow icon
│   │   │   ├── discord.png                     # Discord icon
│   │   │   ├── email.png                       # Email icon
│   │   │   └── linkedin.png                    # LinkedIn icon
│   │   ├── lib/
│   │   │   └── utils.ts                        # Utility functions (cn helper)
│   │   ├── types/
│   │   │   └── index.ts                        # TypeScript type definitions
│   │   ├── constants/
│   │   │   └── index.ts                        # Default configuration constants
│   │   ├── App.tsx                             # Main app component
│   │   ├── App.css                             # Global app styles
│   │   ├── index.css                           # Global styles and CSS variables
│   │   ├── main.tsx                            # Application entry point
│   │   ├── global.d.ts                         # Global type declarations
│   │   └── vite-env.d.ts                       # Vite type declarations
│   ├── public/
│   │   └── Forge-Grid.svg                      # Favicon
│   ├── index.html                              # HTML template
│   ├── package.json                            # Dependencies and scripts
│   ├── tsconfig.json                           # TypeScript configuration
│   ├── tsconfig.app.json                       # App-specific TS config
│   ├── tsconfig.node.json                      # Node-specific TS config
│   ├── vite.config.ts                          # Vite configuration
│   ├── eslint.config.js                        # ESLint configuration
│   └── components.json                         # shadcn/ui configuration
└── README.md                                    # This file
```

## 🛠️ Technology Stack

- **React 19.2.0**: UI library
- **TypeScript 5.9.3**: Type-safe JavaScript
- **Vite 7.2.4**: Build tool and dev server
- **Three.js 0.181.2**: 3D graphics library
- **@react-three/fiber 9.4.2**: React renderer for Three.js
- **@react-three/drei 10.7.7**: Useful helpers for react-three/fiber
- **@react-three/rapier 2.2.0**: Physics engine for 3D interactions
- **GSAP 3.13.0**: Animation library
- **Radix UI**: Accessible component primitives
- **Tailwind CSS 4.1.17**: Utility-first CSS framework
- **CSS Modules**: Scoped component styling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 🏗️ Build

Build the project for production:

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 📱 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧹 Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🎨 Design System

### Color Palette

- **Primary Background**: `#06060a` (Dark)
- **Accent Colors**: Purple (`#a866ff`, `#b881ff`) and Blue (`#5cc7ff`)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `rgba(255, 255, 255, 0.527)` (Semi-transparent white)
- **Glass Effect**: `rgba(10, 10, 20, 0.174)` with backdrop blur

### Typography

- **Logo Font**: Poppins (700 weight)
- **Headings**: Bricolage Grotesque (800 weight), 2.3rem - 4.2rem
- **Body Text**: Space Mono (400-500 weight), 0.78rem - 1.05rem
- **UI Elements**: Inter, Poppins

## 🧩 Component Architecture

All components are modular and accept props for customization:

### NavBar

```tsx
<NavBar
  logo={{ src: logoPath, alt: "Logo", text: "ForgeGrid" }}
  navItems={[{ label: "Home", href: "#" }]}
  socialLinks={[{ label: "LinkedIn", href: "...", icon: iconPath }]}
/>
```

### Hero

```tsx
<Hero
  content={{
    badge: { dot: true, label: "Welcome", newLabel: "NEW" },
    title: "Your Title",
    subtitle: "Your subtitle",
    primaryButton: { label: "Button", href: "#" },
    scrollButton: { enabled: true, targetId: "section-id" }
  }}
/>
```

### AboutUs

```tsx
<AboutUs
  sectionId="about-section"
  lanyardConfig={{ position: [0, 0, 30], gravity: [0, -40, 0] }}
  toggleConfig={{ sectionId: "about-section", threshold: 0.3 }}
/>
```

### WaveBackground

```tsx
<WaveBackground
  enabledWaves={["top", "middle", "bottom"]}
  lineCount={[5, 5, 5]}
  interactive={true}
  parallax={true}
/>
```

## 📄 Sections Overview

1. **NavBar**: Fixed glassmorphism navigation with logo, menu links, and social icons
2. **Hero**: Main hero section with badge, title, subtitle, CTA buttons, and scroll indicator
3. **AboutUs**: About section featuring an interactive 3D lanyard card with physics simulation and gravity toggle

## 📱 Responsive Breakpoints

- **Desktop**: 1041px and above
- **Tablet**: 768px - 1040px
- **Mobile**: Below 768px
- **Small Mobile**: Below 600px

## 🔧 Customization

### Changing Content

All content is configurable through props. Default values are defined in `src/constants/index.ts`:

```typescript
import { DEFAULT_HERO_CONTENT, DEFAULT_NAV_ITEMS } from "./constants";

// Modify constants or pass custom props to components
```

### Adding New Sections

1. Create a new folder in `frontend/src/components/Sections/`
2. Create `SectionName.tsx` and corresponding CSS file
3. Export from `components/index.ts`
4. Import and add to `App.tsx`

### Modifying Navigation

Update navigation items by passing custom `navItems` prop to `NavBar`:

```tsx
<NavBar
  navItems={[
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    // ... more items
  ]}
/>
```

### Customizing 3D Lanyard

Modify the lanyard appearance and physics:

```tsx
<AboutUs
  lanyardConfig={{
    position: [0, 0, 30],
    gravity: [0, -40, 0],
    fov: 20,
    transparent: true
  }}
/>
```

## 🎯 Key Features

### Interactive 3D Card
- Physics-based simulation using Rapier
- Draggable card with rope physics
- Gravity toggle for anti-gravity effects
- Responsive performance optimization

### Animated Background
- Custom GLSL shaders for floating lines
- Interactive mouse effects with bend radius
- Parallax scrolling support
- Configurable wave layers (top, middle, bottom)

### Glassmorphism UI
- Backdrop blur effects
- Semi-transparent backgrounds
- Smooth animations and transitions
- Modern, elegant design

## 📝 Code Style

- **Components**: Functional components with TypeScript
- **Styling**: CSS Modules for component-scoped styles
- **Naming**: PascalCase for components, kebab-case for CSS classes
- **File Structure**: One component per file, co-located styles
- **Exports**: Centralized exports via `index.ts` files

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **ForgeGrid Team** - Initial work

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- React and TypeScript communities
- Three.js and React Three Fiber for 3D graphics
- Vite for excellent developer experience
- Radix UI for accessible components

---

**Note**: This is a production-ready landing page with modular, reusable components. All components accept props for customization and follow modern React best practices with full TypeScript support.
