# Insurance - Next.js + TypeScript + Tailwind + SCSS + shadcn/ui

A modern Next.js application demonstrating the integration of TypeScript, Tailwind CSS v4, module-scoped SCSS, and shadcn/ui with a unified design system powered by CSS variables.

## 🎯 Project Overview

This project showcases how to:
- Use CSS variables as a single source of truth for design tokens
- Share CSS variables between Tailwind CSS and SCSS modules
- Integrate shadcn/ui components with custom theming
- Build type-safe components with TypeScript
- Implement dark mode support

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS v4 (with CSS variables)
  - SCSS with CSS Modules
  - CSS Variables in `globals.css`
- **UI Components**: shadcn/ui
- **Package Manager**: npm

## 📁 Project Structure

```
insurance/
├── app/
│   ├── globals.css          # CSS variables & Tailwind configuration
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Home page with examples
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── ScssCard.tsx        # SCSS module component
│   ├── ScssCard.module.scss # SCSS styles using CSS variables
│   └── TailwindCard.tsx    # Tailwind component
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
└── components.json        # shadcn/ui configuration
```

## 🎨 CSS Variables Architecture

All CSS variables are defined in `app/globals.css` and are used by both Tailwind CSS and SCSS modules:

### Variable Categories

1. **Colors**: Background, foreground, primary, secondary, muted, accent, destructive, border
2. **Spacing**: xs, sm, md, lg, xl, 2xl
3. **Border Radius**: sm, md, lg, xl, 2xl, full
4. **Typography**: Font sizes from xs to 4xl
5. **Shadows**: sm, md, lg, xl
6. **Transitions**: fast, base, slow
7. **Z-index**: Layering values for modals, dropdowns, tooltips, etc.

### Usage in SCSS

```scss
.card {
  background-color: var(--card);
  border: 1px solid var(--border);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}
```

### Usage in Tailwind

```tsx
<div className="bg-card border-border p-6 rounded-lg">
  Content
</div>
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Adding shadcn/ui Components

Add new components from the shadcn/ui library:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## 🎨 Customizing the Design System

### Modifying CSS Variables

Edit `app/globals.css` to change design tokens:

```css
:root {
  --primary: #0070f3;        /* Change primary color */
  --spacing-md: 1rem;        /* Adjust spacing */
  --radius-lg: 0.75rem;      /* Modify border radius */
}
```

Changes will automatically apply to:
- All SCSS modules using these variables
- All Tailwind classes mapped to these variables
- All shadcn/ui components

### Dark Mode

Dark mode is configured using the `prefers-color-scheme` media query and a `.dark` class:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    /* ... other dark mode colors */
  }
}
```

## 📝 Creating New Components

### SCSS Module Component

1. Create a `.module.scss` file:
```scss
// components/MyComponent.module.scss
.container {
  background: var(--card);
  padding: var(--spacing-lg);
}
```

2. Create the component:
```tsx
// components/MyComponent.tsx
import styles from './MyComponent.module.scss';

export function MyComponent() {
  return <div className={styles.container}>Content</div>;
}
```

### Tailwind Component

```tsx
export function MyTailwindComponent() {
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      Content
    </div>
  );
}
```

## 🔧 Configuration Files

### `components.json`
shadcn/ui configuration for component installation and theming.

### `postcss.config.mjs`
PostCSS configuration for Tailwind CSS v4.

### `tsconfig.json`
TypeScript configuration with path aliases:
- `@/*` maps to the root directory

## 🌟 Features Demonstrated

- ✅ CSS Variables as single source of truth
- ✅ Shared design tokens between Tailwind and SCSS
- ✅ Module-scoped SCSS with global CSS variables
- ✅ shadcn/ui component integration
- ✅ TypeScript type safety
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Accessible components

## 📚 Key Concepts

### 1. CSS Variables in Tailwind v4

Tailwind v4 uses the `@theme` directive to map CSS variables to Tailwind utilities:

```css
@theme inline {
  --color-primary: var(--primary);
}
```

This allows `bg-primary` to use `var(--primary)`.

### 2. SCSS Modules with CSS Variables

SCSS modules are scoped by default but can still access global CSS variables:

```scss
.element {
  color: var(--foreground); // Global CSS variable
}
```

### 3. Component Composition

Mix and match approaches based on needs:
- Use SCSS for complex, nested styles
- Use Tailwind for utility-first rapid development
- Use shadcn/ui for accessible, pre-built components

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
