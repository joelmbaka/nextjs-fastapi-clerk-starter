export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Template Features</h1>
        <a 
          href="https://github.com/yourusername/nextfast-template/blob/main/FEATURES.md" 
          target="_blank"
          rel="noopener noreferrer" 
          className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90"
        >
          View Docs
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <span className="text-2xl mb-4 block">🔐</span>
          <h2 className="text-lg font-semibold mb-2">Authentication</h2>
          <p className="text-sm text-foreground/70">
            Secure authentication with Clerk, protected routes, and JWT validation
          </p>
        </div>

        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <span className="text-2xl mb-4 block">⚡</span>
          <h2 className="text-lg font-semibold mb-2">API Integration</h2>
          <p className="text-sm text-foreground/70">
            FastAPI backend with automatic OpenAPI docs and type-safe endpoints
          </p>
        </div>

        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <span className="text-2xl mb-4 block">🎨</span>
          <h2 className="text-lg font-semibold mb-2">UI Components</h2>
          <p className="text-sm text-foreground/70">
            Ready-to-use components with Tailwind CSS and dark mode support
          </p>
        </div>
      </div>
    </div>
  );
} 