import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="border-b border-foreground/10 bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Dashboard Template</h1>
          <span className="rounded-full bg-foreground/10 px-2 py-1 text-xs font-medium">
            Demo
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/yourusername/nextfast-template" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-foreground/60 hover:text-foreground"
          >
            Documentation
          </a>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
} 