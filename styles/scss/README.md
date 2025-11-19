# SCSS Utilities

A comprehensive collection of SCSS utilities, functions, and mixins for the project.

## 📁 Structure

```
styles/scss/
├── _functions.scss     # Utility functions (pxToRem, fluidSize, etc.)
├── _variables.scss     # SCSS variables (spacing, typography, etc.)
├── _breakpoints.scss   # Responsive breakpoint mixins
├── _mixins.scss        # Common mixins (flex, grid, transitions, etc.)
├── index.scss          # Main entry point (imports all utilities)
└── README.md           # This file
```

## 🚀 Usage

Import the utilities in your `.module.scss` files:

```scss
@import '@/styles/scss';

.myComponent {
  padding: pxToRem(24);
  @include flex(row, center, center);
  @include breakpoint(md) {
    padding: pxToRem(32);
  }
}
```

## 📚 Available Utilities

### Functions

#### `pxToRem($pixels, $base: 16)`
Converts pixel values to rem units.

```scss
font-size: pxToRem(24);        // 1.5rem
padding: pxToRem(16, 20);      // 0.8rem (with base 20)
```

#### `pxToEm($pixels, $base: 16)`
Converts pixel values to em units.

```scss
margin: pxToEm(16);            // 1em
```

#### `stripUnit($number)`
Removes the unit from a number.

```scss
$value: stripUnit(16px);       // 16
```

#### `fluidSize($min, $max, $min-width: 320, $max-width: 1200)`
Creates fluid typography that scales between viewport sizes.

```scss
font-size: fluidSize(16, 32);  // Scales from 16px to 32px
```

### Breakpoint Mixins

#### `@include breakpoint($size)`
Mobile-first responsive styles (min-width).

```scss
.element {
  font-size: 1rem;
  
  @include breakpoint(md) {
    font-size: 1.5rem;  // 768px and up
  }
  
  @include breakpoint(lg) {
    font-size: 2rem;    // 1024px and up
  }
}
```

**Available breakpoints:**
- `xs`: 320px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

#### `@include breakpoint-down($size)`
Desktop-first responsive styles (max-width).

```scss
@include breakpoint-down(md) {
  display: none;  // Hidden below 768px
}
```

#### `@include breakpoint-between($min, $max)`
Styles between two breakpoints.

```scss
@include breakpoint-between(sm, lg) {
  padding: 2rem;  // Between 640px and 1024px
}
```

#### `@include breakpoint-only($size)`
Styles only at specific breakpoint range.

```scss
@include breakpoint-only(md) {
  color: blue;  // Only between 768px and 1023px
}
```

#### Shortcuts

```scss
@include mobile-only { }   // Below 768px
@include tablet-up { }     // 768px and up
@include desktop-up { }    // 1024px and up
```

### Layout Mixins

#### `@include flex($direction, $justify, $align, $wrap)`
Flexbox container shorthand.

```scss
.container {
  @include flex(row, center, center);
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
}
```

#### `@include flex-center`
Center content with flexbox.

```scss
.centered {
  @include flex-center;
}
```

#### `@include grid($columns, $gap)`
Grid container shorthand.

```scss
.grid {
  @include grid(3, 2rem);
  // or
  @include grid(repeat(auto-fit, minmax(250px, 1fr)), 1rem);
}
```

### Positioning Mixins

#### `@include absolute($top, $right, $bottom, $left)`
Absolute positioning shorthand.

```scss
.overlay {
  @include absolute(0, 0, 0, 0);
}
```

#### `@include fixed($top, $right, $bottom, $left)`
Fixed positioning shorthand.

#### `@include cover`
Cover entire parent element.

```scss
.fullscreen {
  @include cover;
}
```

### Size Mixins

#### `@include size($width, $height)`
Width and height shorthand.

```scss
@include size(100px, 50px);
@include size(50px);  // Square
```

#### `@include square($size)`
Create a square element.

#### `@include circle($size)`
Create a circular element.

```scss
.avatar {
  @include circle(50px);
}
```

#### `@include aspect-ratio($width, $height)`
Maintain aspect ratio.

```scss
.video {
  @include aspect-ratio(16, 9);
}
```

### Transition & Animation Mixins

#### `@include transition($properties, $duration, $timing)`
Transition shorthand.

```scss
@include transition(opacity, 0.3s, ease-in-out);
@include transition((opacity, transform), 0.3s);
```

#### `@include smooth-transition`
Transition using CSS variable timing.

```scss
.button {
  @include smooth-transition;
}
```

#### `@include hover-lift($scale)`
Hover lift effect with scale.

```scss
.card {
  @include hover-lift(1.05);
}
```

### Text Mixins

#### `@include truncate`
Single-line text truncation with ellipsis.

```scss
.filename {
  @include truncate;
}
```

#### `@include line-clamp($lines)`
Multi-line text truncation.

```scss
.description {
  @include line-clamp(3);
}
```

#### `@include gradient-text($gradient)`
Gradient text effect.

```scss
.title {
  @include gradient-text(linear-gradient(45deg, red, blue));
}
```

### Utility Mixins

#### `@include visually-hidden`
Hide element visually but keep for screen readers.

```scss
.sr-only {
  @include visually-hidden;
}
```

#### `@include reset-list`
Remove default list styling.

```scss
.menu {
  @include reset-list;
}
```

#### `@include reset-button`
Remove default button styling.

```scss
.custom-button {
  @include reset-button;
}
```

#### `@include glass($bg, $blur)`
Glassmorphism effect.

```scss
.modal {
  @include glass(rgba(255, 255, 255, 0.1), 10px);
}
```

#### `@include scrollbar($width, $track-color, $thumb-color)`
Custom scrollbar styling.

```scss
.content {
  @include scrollbar(8px, transparent, var(--primary));
}
```

#### `@include focus-ring`
Add focus ring using CSS variables.

```scss
button:focus {
  @include focus-ring;
}
```

### Variables

All spacing, typography, and color values from `globals.css` are available as SCSS variables:

```scss
// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
// ... etc

// Typography
$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
// ... etc

// Font weights
$font-weight-normal: 400;
$font-weight-bold: 700;
// ... etc

// Z-index
$z-modal: 1050;
$z-tooltip: 1070;
// ... etc
```

## 💡 Best Practices

1. **Always use `pxToRem()` for sizes** instead of hardcoded pixel values
2. **Use breakpoint mixins** for responsive design
3. **Leverage CSS variables** from `globals.css` for colors
4. **Use semantic mixins** like `@include flex-center` for clarity
5. **Combine utilities** for complex effects

## 📝 Example Component

```scss
@import '@/styles/scss';

.card {
  // Colors from CSS variables
  background: var(--card);
  border: 1px solid var(--border);
  
  // Size with pxToRem
  padding: pxToRem(24);
  border-radius: $radius-lg;
  
  // Transition
  @include transition(transform, 0.3s, ease-out);
  
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
```

## 🔗 Related Files

- `app/globals.css` - CSS variables source
- `tsconfig.json` - Contains `@styles/*` path alias
- `components/*.module.scss` - Example usage

