# Project Overview

## 🎯 What's Been Set Up

Your Next.js project is fully configured with a unified design system where **all CSS variables are defined in `globals.css`** and can be used by both Tailwind CSS and SCSS modules.

## 📦 Installed Packages

### Core Dependencies
- ✅ **next** (16.0.3) - React framework with App Router
- ✅ **react** (19.2.0) - React library
- ✅ **typescript** (5.x) - Type safety
- ✅ **sass** (1.94.1) - SCSS support for module-scoped styles

### Styling
- ✅ **tailwindcss** (4.x) - Utility-first CSS framework
- ✅ **@tailwindcss/postcss** (4.x) - PostCSS integration
- ✅ **tw-animate-css** (1.4.0) - Animation utilities

### UI Components (shadcn/ui)
- ✅ **@radix-ui/react-slot** - Primitive for accessible components
- ✅ **class-variance-authority** - CSS variant management
- ✅ **clsx** - Conditional classNames
- ✅ **tailwind-merge** - Smart Tailwind class merging
- ✅ **lucide-react** - Icon library

## 🏗️ Project Structure

```
insurance/
│
├── 📁 app/                          # Next.js App Router
│   ├── globals.css                  # ⭐ CSS VARIABLES (Single Source of Truth)
│   ├── layout.tsx                   # Root layout with fonts
│   └── page.tsx                     # Homepage with examples
│
├── 📁 components/                   # React components
│   ├── 📁 ui/                       # shadcn/ui components
│   │   ├── button.tsx               # Button component
│   │   └── card.tsx                 # Card component
│   │
│   ├── ScssCard.tsx                 # Example: SCSS module component
│   ├── ScssCard.module.scss         # SCSS styles using CSS vars
│   └── TailwindCard.tsx             # Example: Tailwind component
│
├── 📁 lib/                          # Utilities
│   ├── utils.ts                     # cn() helper for classNames
│   └── design-tokens.ts             # CSS vars as TypeScript
│
├── 📁 public/                       # Static assets
│
├── components.json                  # shadcn/ui configuration
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── postcss.config.mjs               # PostCSS config
├── next.config.ts                   # Next.js config
│
├── README.md                        # Full documentation
├── SETUP.md                         # Quick start guide
└── PROJECT_OVERVIEW.md              # This file
```

## 🎨 CSS Variables Architecture

### The Central Design System

All CSS variables are defined in **`app/globals.css`** in the `:root` selector:

```css
:root {
  /* Colors */
  --primary: value;
  --secondary: value;
  --background: value;
  --foreground: value;
  --card: value;
  --border: value;
  /* + many more */
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  /* + more sizes */
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  /* + more sizes */
  
  /* Typography, Shadows, Transitions, Z-index */
  /* + comprehensive design tokens */
}
```

### Tailwind Integration

Tailwind CSS v4 uses the `@theme inline` directive to map CSS variables to utility classes:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-card: var(--card);
  --color-border: var(--border);
  /* etc. */
}
```

This enables:
- `bg-primary` → uses `var(--primary)`
- `border-border` → uses `var(--border)`
- `text-card-foreground` → uses `var(--card-foreground)`

### SCSS Access

SCSS modules can directly access the same CSS variables:

```scss
.myElement {
  background: var(--card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

## 🎯 Three Styling Approaches

### 1️⃣ SCSS Modules (Complex Styles)

**When to use:** Complex nested styles, animations, pseudo-elements

**Example:**
```scss
// components/MyCard.module.scss
.card {
  background: var(--card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  
  &:hover {
    box-shadow: var(--shadow-lg);
  }
  
  .title {
    color: var(--foreground);
    font-size: var(--font-size-xl);
  }
}
```

```tsx
// components/MyCard.tsx
import styles from './MyCard.module.scss';

export function MyCard() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Title</h2>
    </div>
  );
}
```

### 2️⃣ Tailwind CSS (Utility-First)

**When to use:** Rapid development, simple layouts, responsive design

**Example:**
```tsx
export function MyCard() {
  return (
    <div className="bg-card p-6 rounded-lg hover:shadow-lg">
      <h2 className="text-foreground text-xl">Title</h2>
    </div>
  );
}
```

### 3️⃣ shadcn/ui Components (Accessible, Pre-built)

**When to use:** Need accessible, tested components quickly

**Example:**
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function MyFeature() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

## 🌙 Dark Mode Support

Dark mode is configured with two approaches:

1. **Automatic (System Preference)**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    /* ... dark colors */
  }
}
```

2. **Manual Toggle (`.dark` class)**
```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark colors */
}
```

## 🚀 Quick Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Run ESLint |
| `npx shadcn@latest add [component]` | Add shadcn/ui component |

## 📚 Key Files to Know

| File | Purpose |
|------|---------|
| `app/globals.css` | **⭐ All CSS variables** - The single source of truth |
| `components.json` | shadcn/ui configuration |
| `lib/utils.ts` | `cn()` helper for conditional classes |
| `lib/design-tokens.ts` | CSS variables exported as TypeScript |
| `app/page.tsx` | Example page demonstrating all approaches |

## 🎓 Learning Resources

### Example Components Created
- ✅ `components/ScssCard.tsx` - SCSS module example
- ✅ `components/TailwindCard.tsx` - Tailwind example
- ✅ `app/page.tsx` - Complete demo page

### Documentation
- 📖 `README.md` - Comprehensive project documentation
- 📖 `SETUP.md` - Quick start guide
- 📖 `.cursorrules` - Development guidelines for AI

## 💡 Pro Tips

### 1. Consistent Design
All three styling approaches use the same CSS variables, ensuring visual consistency.

### 2. Mix and Match
You can use all three approaches in the same project:
- Use Tailwind for layout and spacing
- Use SCSS modules for complex component styles
- Use shadcn/ui for forms and interactive elements

### 3. Easy Theming
Change one CSS variable in `globals.css`, and it updates everywhere:
```css
:root {
  --primary: #ff0000; /* Changes primary color everywhere */
}
```

### 4. TypeScript Support
Import design tokens in TypeScript:
```tsx
import { colors, spacing } from '@/lib/design-tokens';
```

### 5. Add More shadcn Components
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
```

## ✅ Verification

The project has been:
- ✅ Built successfully (`npm run build`)
- ✅ Type-checked (no TypeScript errors)
- ✅ Linted (no ESLint errors)
- ✅ Development server running

## 🎉 You're Ready!

Your project is fully configured with:
1. ✅ Next.js 16 + TypeScript
2. ✅ Tailwind CSS v4 with CSS variables
3. ✅ SCSS module support
4. ✅ shadcn/ui components
5. ✅ Unified design system
6. ✅ Dark mode support
7. ✅ Example components
8. ✅ Comprehensive documentation

**Start developing:** Visit http://localhost:3000 to see your app!

Happy coding! 🚀

