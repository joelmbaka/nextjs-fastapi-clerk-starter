import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a matcher for public routes
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.[\\w]+$|_next).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}; 