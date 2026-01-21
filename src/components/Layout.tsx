import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
    const { pathname } = useLocation();

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* Skip to main content link for keyboard users */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg"
                aria-label="Skip to main content"
            >
                Skip to main content
            </a>

            <Sidebar />

            <main
                id="main-content"
                className="lg:pl-64 min-h-screen"
                role="main"
                aria-label="Main documentation content"
            >
                {/* Content container with responsive width - pages manage their own prose wrapper */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 lg:py-10">
                    <Outlet />
                </div>
            </main>

            {/* Scroll to top button */}
            <ScrollToTop />
        </div>
    );
}
