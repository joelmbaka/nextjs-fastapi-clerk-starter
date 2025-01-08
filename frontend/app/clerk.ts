const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const secretKey = process.env.CLERK_SECRET_KEY;

if (!publishableKey) {
  throw new Error("Missing Clerk Publishable Key");
}

if (!secretKey) {
  throw new Error("Missing Clerk Secret Key");
}

export { publishableKey, secretKey }; 