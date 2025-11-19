# SCSS Utils - Quick Reference

## 🚀 Getting Started

```scss
// Import at the top of your .module.scss file
@import '@/styles/scss';
```

## 📏 Most Used Functions

```scss
// Convert pixels to rem
padding: pxToRem(24);              // → 1.5rem
margin: pxToRem(16) pxToRem(32);   // → 1rem 2rem

// Fluid typography (scales between viewports)
font-size: fluidSize(16, 32);      // → Scales from 16px to 32px
```

## 📱 Responsive Breakpoints

```scss
.element {
  padding: pxToRem(16);
  
  // Tablet and up (768px+)
  @include breakpoint(md) {
    padding: pxToRem(24);
  }
  
  // Desktop and up (1024px+)
  @include breakpoint(lg) {
    padding: pxToRem(32);
  }
  
  // Mobile only (below 768px)
  @include mobile-only {
    font-size: pxToRem(14);
  }
}
```

**Breakpoints:** `xs` (320) | `sm` (640) | `md` (768) | `lg` (1024) | `xl` (1280) | `2xl` (1536)

## 🎨 Layout Mixins

```scss
// Flexbox
.container {
  @include flex(row, center, center);
  // or
  @include flex-center;  // Quick center
}

// Grid
.grid {
  @include grid(3, pxToRem(24));
  // or
  @include grid(repeat(auto-fit, minmax(250px, 1fr)), pxToRem(16));
}
```

## 📐 Size & Position

```scss
// Size
.box {
  @include size(100px, 50px);    // Width & height
  @include square(50px);          // Square
  @include circle(50px);          // Circle
}

// Position
.overlay {
  @include absolute(0, 0, 0, 0);  // Cover parent
  // or
  @include cover;                 // Same as above
}
```

## ✨ Effects & Transitions

```scss
.card {
  @include smooth-transition;     // Uses CSS var timing
  // or
  @include transition(transform, 0.3s, ease-out);
  
  // Hover lift effect
  @include hover-lift(1.05);
}

// Glassmorphism
.glass {
  @include glass(rgba(255, 255, 255, 0.1), 10px);
}
```

## 📝 Text Utils

```scss
// Truncate (one line)
.filename {
  @include truncate;
}

// Line clamp (multiple lines)
.description {
  @include line-clamp(3);
}

// Gradient text
.title {
  @include gradient-text(linear-gradient(45deg, red, blue));
}
```

## 🎯 Common Patterns

```scss
// Reset styles
ul {
  @include reset-list;
}

button {
  @include reset-button;
}

// Hide visually but keep for screen readers
.sr-only {
  @include visually-hidden;
}

// Focus ring
button:focus {
  @include focus-ring;
}

// Custom scrollbar
.scrollable {
  @include scrollbar(8px, transparent, var(--primary));
}

// Aspect ratio
.video {
  @include aspect-ratio(16, 9);
}
```

## 📦 Variables

```scss
// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;

// Typography
$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;

// Font weights
$font-weight-normal: 400;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Border radius
$radius-sm: 0.25rem;
$radius-md: 0.5rem;
$radius-lg: 0.75rem;
$radius-full: 9999px;

// Z-index
$z-modal: 1050;
$z-tooltip: 1070;
```

## 💡 Complete Example

```scss
@import '@/styles/scss';

.card {
  // CSS variables for colors
  background: var(--card);
  border: 1px solid var(--border);
  
  // pxToRem for spacing
  padding: pxToRem(24);
  border-radius: $radius-lg;
  
  // Smooth transitions
  @include smooth-transition;
  
  // Hover effect
  &:hover {
    @include hover-lift;
  }
  
  // Responsive
  @include breakpoint(md) {
    padding: pxToRem(32);
  }
}

.header {
  @include flex(row, space-between, center);
  margin-bottom: pxToRem(16);
}

.title {
  font-size: fluidSize(20, 32);
  font-weight: $font-weight-bold;
  @include line-clamp(2);
}

.description {
  font-size: $font-size-sm;
  color: var(--muted-foreground);
  line-height: $line-height-relaxed;
}
```

## 🎨 Colors (Use CSS Variables)

```scss
// Always use CSS variables from globals.css for colors
.element {
  background: var(--primary);
  color: var(--primary-foreground);
  border: 1px solid var(--border);
}
```

**Available colors:**
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--background` / `--foreground`
- `--card` / `--card-foreground`
- `--muted` / `--muted-foreground`
- `--border` / `--input` / `--ring`
- `--destructive` / `--destructive-foreground`

---

📖 **Full Documentation:** See `README.md` in this folder

