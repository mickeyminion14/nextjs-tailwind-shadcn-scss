import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScssCard, ScssBadge } from "@/components/ScssCard";
import { TailwindCard, TailwindBadge } from "@/components/TailwindCard";
import { ScssExample } from "@/components/ScssExample";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Next.js + TypeScript + Tailwind + SCSS + shadcn/ui
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete setup demonstrating CSS variables shared between Tailwind CSS and SCSS modules,
            all powered by a centralized globals.css configuration.
          </p>
        </header>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* SCSS Module Card */}
          <ScssCard 
            title="SCSS Module Component"
            description="Using CSS variables in module-scoped SCSS"
          >
            <p>This card is styled using <strong>SCSS modules</strong> with CSS variables from globals.css:</p>
            <ul>
              <li>var(--card) for background</li>
              <li>var(--border) for borders</li>
              <li>var(--spacing-*) for spacing</li>
              <li>var(--radius-*) for border radius</li>
            </ul>
            <div className="mt-4">
              <ScssBadge variant="default">SCSS</ScssBadge>
              <ScssBadge variant="secondary">Variables</ScssBadge>
            </div>
          </ScssCard>

          {/* Tailwind Card */}
          <TailwindCard 
            title="Tailwind CSS Component"
            description="Using Tailwind classes with CSS variables"
          >
            <p className="mb-2">This card uses <strong>Tailwind CSS classes</strong> that reference the same CSS variables:</p>
            <ul className="list-none p-0 my-4 space-y-1">
              <li className="text-muted-foreground">
                <span className="text-primary font-bold mr-2">✓</span>
                bg-card maps to var(--card)
              </li>
              <li className="text-muted-foreground">
                <span className="text-primary font-bold mr-2">✓</span>
                border-border maps to var(--border)
              </li>
              <li className="text-muted-foreground">
                <span className="text-primary font-bold mr-2">✓</span>
                rounded-lg uses border-radius
              </li>
            </ul>
            <div className="mt-4">
              <TailwindBadge variant="default">Tailwind</TailwindBadge>
              <TailwindBadge variant="secondary">CSS Vars</TailwindBadge>
            </div>
          </TailwindCard>

          {/* shadcn/ui Card */}
          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui Component</CardTitle>
              <CardDescription>
                Pre-built accessible components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                This card uses <strong>shadcn/ui</strong> components which are built on top of Tailwind CSS and use the same CSS variables.
              </p>
              <ul className="list-none p-0 space-y-2 mb-4 text-sm">
                <li className="text-muted-foreground">
                  <span className="text-primary font-bold mr-2">✓</span>
                  Accessible by default
                </li>
                <li className="text-muted-foreground">
                  <span className="text-primary font-bold mr-2">✓</span>
                  Customizable with CSS vars
                </li>
                <li className="text-muted-foreground">
                  <span className="text-primary font-bold mr-2">✓</span>
                  TypeScript support
                </li>
              </ul>
              <Button className="w-full">Click Me</Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="bg-muted rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">✨ Project Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">🎨 Unified Design System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All CSS variables defined in <code className="bg-background px-2 py-1 rounded">globals.css</code></li>
                <li>• Accessible in both Tailwind and SCSS</li>
                <li>• Dark mode support included</li>
                <li>• Consistent spacing, colors, and typography</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">🛠️ Technology Stack</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Next.js 16 with App Router</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS v4 with CSS variables</li>
                <li>• SCSS modules for complex styling</li>
                <li>• shadcn/ui for accessible components</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SCSS Utils Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">🎨 SCSS Utilities Demo</h2>
          <p className="text-muted-foreground mb-6">
            Comprehensive example showcasing all available SCSS mixins and functions
          </p>
          <ScssExample />
        </div>

        {/* Code Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>SCSS Usage</CardTitle>
              <CardDescription>How to use CSS variables in SCSS modules</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`.card {
  background-color: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
}`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind Usage</CardTitle>
              <CardDescription>How to use CSS variables with Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`<div className="
  bg-card 
  text-card-foreground 
  border-border 
  rounded-lg 
  p-6
">
  Content here
</div>`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ using Next.js, TypeScript, Tailwind CSS, SCSS, and shadcn/ui</p>
        </footer>
      </div>
    </div>
  );
}
