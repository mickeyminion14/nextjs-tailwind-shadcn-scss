import React from 'react';
import styles from './ScssExample.module.scss';

/**
 * Example component demonstrating all SCSS utilities
 * This showcases:
 * - pxToRem function
 * - Responsive breakpoint mixins
 * - Flex and Grid mixins
 * - Transition mixins
 * - Typography utilities
 * - And more!
 */
export function ScssExample() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>SCSS Utils Demo</h2>
        <span className={styles.badge}>New</span>
      </div>

      <div className={styles.content}>
        <p>
          This component demonstrates the SCSS utilities including{' '}
          <code>pxToRem()</code>, responsive mixins, flex/grid helpers, and more.
        </p>
        
        <p className={styles.truncated}>
          This text will be truncated with an ellipsis if it&apos;s too long to fit in one line
        </p>
        
        <p className={styles.clamped}>
          This is a longer paragraph that will be clamped to 3 lines maximum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        
        <p className={styles.responsiveText}>
          Resize your browser window
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.imageWrapper} />
          <h3>Card 1</h3>
          <p>Hover to see the lift effect</p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.imageWrapper} />
          <h3>Card 2</h3>
          <p>Uses aspect-ratio mixin</p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.imageWrapper} />
          <h3>Card 3</h3>
          <p>Responsive grid layout</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button className={styles.button}>
          Primary Button
        </button>
        
        <div className={styles.circle}>A</div>
        
        <div className={styles.glassCard} style={{ flex: 1 }}>
          Glassmorphism effect
        </div>
      </div>

      <div className={styles.customScrollbar} style={{ marginTop: '2rem' }}>
        <p>Custom scrollbar demo - scroll to see:</p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>Line {i + 1}</p>
        ))}
      </div>
    </div>
  );
}

