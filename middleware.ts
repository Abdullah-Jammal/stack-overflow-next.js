import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);
const isPublicRoute = createRouteMatcher(
    [
        '/',
        '/api/webhook',
        '/question/:id',
        '/tags',
        '/tags/:id',
        '/profile/:id',
        '/comunity',
        '/jobs'
    ]
)

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req) && !isPublicRoute(req)) {
        auth().protect();
    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
