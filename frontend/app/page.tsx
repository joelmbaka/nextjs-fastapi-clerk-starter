import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const userId = await auth().then(auth => auth.userId);

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex justify-between items-center">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          NextFast Template
        </span>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      <main className="flex flex-col gap-8 items-center text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Build Faster with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Next.js + FastAPI
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-foreground/80 max-w-2xl">
          A modern full-stack template with authentication, dashboard, and API integration
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
          <div className="p-6 rounded-xl border border-foreground/10 bg-foreground/5">
            <span className="text-2xl mb-4 block">🔐</span>
            <h2 className="text-lg font-semibold mb-2">Authentication Ready</h2>
            <p className="text-sm text-foreground/70">
              Secure authentication with Clerk, including JWT validation and protected routes
            </p>
          </div>
          
          <div className="p-6 rounded-xl border border-foreground/10 bg-foreground/5">
            <span className="text-2xl mb-4 block">⚡</span>
            <h2 className="text-lg font-semibold mb-2">Full-Stack Setup</h2>
            <p className="text-sm text-foreground/70">
              Next.js 14 frontend with FastAPI backend, ready for your custom features
            </p>
          </div>
          
          <div className="p-6 rounded-xl border border-foreground/10 bg-foreground/5">
            <span className="text-2xl mb-4 block">📱</span>
            <h2 className="text-lg font-semibold mb-2">Responsive Design</h2>
            <p className="text-sm text-foreground/70">
              Modern UI with Tailwind CSS, dark mode support, and customizable components
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8">
                Try Demo
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-foreground/70">
        <span>© {new Date().getFullYear()} NextFast Template. MIT License.</span>
      </footer>
    </div>
  );
}
