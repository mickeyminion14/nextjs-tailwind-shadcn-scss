import React from 'react';

interface TailwindCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

/**
 * This component demonstrates using Tailwind CSS with CSS variables from globals.css
 * The colors (bg-card, text-card-foreground, etc.) are defined in the @theme directive
 * and map to CSS variables (--card, --card-foreground, etc.)
 */
export function TailwindCard({ title, description, children }: TailwindCardProps) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
      <div className="mb-4 pb-4 border-b border-border">
        <h3 className="text-xl font-semibold text-foreground m-0">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="text-card-foreground">
        {children}
      </div>
    </div>
  );
}

export function TailwindBadge({ 
  children, 
  variant = 'default' 
}: { 
  children: React.ReactNode; 
  variant?: 'default' | 'secondary' | 'destructive';
}) {
  const baseClasses = "inline-block px-2 py-1 rounded-full text-xs font-semibold mr-2";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    destructive: "bg-destructive text-destructive-foreground"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

