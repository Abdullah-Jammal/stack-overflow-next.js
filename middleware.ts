import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the protected, public, and ignored routes
const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);
const isPublicRoute = createRouteMatcher([
    '/',
    '/api/webhook',
    '/question/:id',
    '/tags',
    '/tags/:id',
    '/profile/:id',
    '/comunity',
    '/jobs'
]);
const isIgnoredRoute = createRouteMatcher([
    '/api/webhook',
    '/api/chatgpt',
]);

export default clerkMiddleware((auth, req) => {
    // Check if the route should be ignored
    if (isIgnoredRoute(req)) {
        return; // Skip middleware for ignored routes
    }

    // Protect route if it's protected and not public
    if (isProtectedRoute(req) && !isPublicRoute(req)) {
        auth().protect();
    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
