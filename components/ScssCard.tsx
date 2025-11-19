import React from 'react';
import styles from './ScssCard.module.scss';

interface ScssCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ScssCard({ title, description, children }: ScssCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (
          <p className={styles.cardDescription}>{description}</p>
        )}
      </div>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}

export function ScssBadge({ 
  children, 
  variant = 'default' 
}: { 
  children: React.ReactNode; 
  variant?: 'default' | 'secondary' | 'destructive';
}) {
  const badgeClass = variant === 'default' 
    ? styles.badge 
    : variant === 'secondary' 
    ? `${styles.badge} ${styles.badgeSecondary}`
    : `${styles.badge} ${styles.badgeDestructive}`;
    
  return <span className={badgeClass}>{children}</span>;
}

