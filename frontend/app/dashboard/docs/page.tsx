export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Documentation</h1>

      <div className="grid gap-6">
        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h2 className="text-lg font-medium mb-4">Quick Start</h2>
          <div className="space-y-4 text-sm text-foreground/70">
            <p>Follow these steps to get started with the template:</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Clone the repository</li>
              <li>Install dependencies with <code className="bg-foreground/5 px-2 py-1 rounded">npm install</code></li>
              <li>Set up environment variables</li>
              <li>Run the development server</li>
            </ol>
          </div>
        </div>

        <div className="rounded-lg border border-foreground/10 bg-background p-6">
          <h2 className="text-lg font-medium mb-4">Resources</h2>
          <div className="grid gap-4">
            <a 
              href="https://github.com/yourusername/nextfast-template"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md p-4 bg-foreground/5 hover:bg-foreground/10"
            >
              <div>
                <h3 className="font-medium">GitHub Repository</h3>
                <p className="text-sm text-foreground/70">View source code and contribute</p>
              </div>
              <span>→</span>
            </a>
            <a 
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md p-4 bg-foreground/5 hover:bg-foreground/10"
            >
              <div>
                <h3 className="font-medium">Next.js Documentation</h3>
                <p className="text-sm text-foreground/70">Learn about Next.js features</p>
              </div>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 