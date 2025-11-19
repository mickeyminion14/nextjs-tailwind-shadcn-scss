/**
 * Design Tokens
 * 
 * This file provides TypeScript utilities for accessing CSS variables
 * defined in globals.css. Useful for programmatic styling or animations.
 */

export const colors = {
  // Base
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  card: 'var(--card)',
  cardForeground: 'var(--card-foreground)',
  popover: 'var(--popover)',
  popoverForeground: 'var(--popover-foreground)',
  
  // Primary
  primary: 'var(--primary)',
  primaryForeground: 'var(--primary-foreground)',
  
  // Secondary
  secondary: 'var(--secondary)',
  secondaryForeground: 'var(--secondary-foreground)',
  
  // Muted
  muted: 'var(--muted)',
  mutedForeground: 'var(--muted-foreground)',
  
  // Accent
  accent: 'var(--accent)',
  accentForeground: 'var(--accent-foreground)',
  
  // Destructive
  destructive: 'var(--destructive)',
  destructiveForeground: 'var(--destructive-foreground)',
  
  // Border
  border: 'var(--border)',
  input: 'var(--input)',
  ring: 'var(--ring)',
  
  // Chart
  chart1: 'var(--chart-1)',
  chart2: 'var(--chart-2)',
  chart3: 'var(--chart-3)',
  chart4: 'var(--chart-4)',
  chart5: 'var(--chart-5)',
} as const;

export const spacing = {
  xs: 'var(--spacing-xs)',
  sm: 'var(--spacing-sm)',
  md: 'var(--spacing-md)',
  lg: 'var(--spacing-lg)',
  xl: 'var(--spacing-xl)',
  '2xl': 'var(--spacing-2xl)',
} as const;

export const radius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const;

export const fontSize = {
  xs: 'var(--font-size-xs)',
  sm: 'var(--font-size-sm)',
  base: 'var(--font-size-base)',
  lg: 'var(--font-size-lg)',
  xl: 'var(--font-size-xl)',
  '2xl': 'var(--font-size-2xl)',
  '3xl': 'var(--font-size-3xl)',
  '4xl': 'var(--font-size-4xl)',
} as const;

export const shadow = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
} as const;

export const transition = {
  fast: 'var(--transition-fast)',
  base: 'var(--transition-base)',
  slow: 'var(--transition-slow)',
} as const;

export const zIndex = {
  dropdown: 'var(--z-dropdown)',
  sticky: 'var(--z-sticky)',
  fixed: 'var(--z-fixed)',
  modalBackdrop: 'var(--z-modal-backdrop)',
  modal: 'var(--z-modal)',
  popover: 'var(--z-popover)',
  tooltip: 'var(--z-tooltip)',
} as const;

/**
 * Helper function to get computed CSS variable value
 * Usage: getCSSVariable('--primary') returns the actual color value
 */
export function getCSSVariable(variableName: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

/**
 * Helper function to set CSS variable value dynamically
 * Usage: setCSSVariable('--primary', '#ff0000')
 */
export function setCSSVariable(variableName: string, value: string): void {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(variableName, value);
}

// Type exports for better TypeScript support
export type Color = keyof typeof colors;
export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radius;
export type FontSize = keyof typeof fontSize;
export type Shadow = keyof typeof shadow;
export type Transition = keyof typeof transition;
export type ZIndex = keyof typeof zIndex;

