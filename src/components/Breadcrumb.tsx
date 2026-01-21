import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { clsx } from 'clsx';

// Route to label mapping
const routeLabels: Record<string, string> = {
    '': 'Home',
    'linux-basics': 'Linux & MPI Basics',
    'getting-started': 'Getting Started',
    'core-concepts': 'Core Concepts',
    'account-management': 'Account Management',
    'running-jobs': 'Running Jobs',
    'applications': 'Applications',
    'debugging': 'Debugging',
    'best-practices': 'Best Practices',
    'usage-policy': 'Usage Policy',
    'support': 'Support & Help',
};

interface BreadcrumbProps {
    className?: string;
}

export function Breadcrumb({ className }: BreadcrumbProps) {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    // Don't show breadcrumb on home page
    if (pathSegments.length === 0) {
        return null;
    }

    return (
        <nav
            aria-label="Breadcrumb"
            className={clsx(
                'flex items-center gap-1 text-sm mb-6 py-2',
                className
            )}
        >
            <Link
                to="/"
                className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Go to home page"
            >
                <Home size={14} aria-hidden="true" />
                <span className="hidden sm:inline">Home</span>
            </Link>

            {pathSegments.map((segment, index) => {
                const path = '/' + pathSegments.slice(0, index + 1).join('/');
                const isLast = index === pathSegments.length - 1;
                const label = routeLabels[segment] || segment;

                return (
                    <span key={path} className="flex items-center gap-1">
                        <ChevronRight
                            size={14}
                            className="text-slate-400 dark:text-slate-600"
                            aria-hidden="true"
                        />
                        {isLast ? (
                            <span
                                className="text-slate-900 dark:text-slate-100 font-medium"
                                aria-current="page"
                            >
                                {label}
                            </span>
                        ) : (
                            <Link
                                to={path}
                                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {label}
                            </Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}

// Related Pages component - shows links to related documentation
interface RelatedPage {
    to: string;
    label: string;
    description?: string;
}

interface RelatedPagesProps {
    pages: RelatedPage[];
    title?: string;
    className?: string;
}

export function RelatedPages({ pages, title = 'Related Pages', className }: RelatedPagesProps) {
    if (pages.length === 0) return null;

    return (
        <div className={clsx(
            'mt-12 pt-8 border-t border-slate-200 dark:border-slate-800',
            className
        )}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pages.map((page) => (
                    <Link
                        key={page.to}
                        to={page.to}
                        className="group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                    >
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {page.label}
                        </h4>
                        {page.description && (
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {page.description}
                            </p>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}

// Previous/Next navigation for sequential pages
interface PageNavigationProps {
    previous?: { to: string; label: string };
    next?: { to: string; label: string };
    className?: string;
}

export function PageNavigation({ previous, next, className }: PageNavigationProps) {
    if (!previous && !next) return null;

    return (
        <nav
            aria-label="Page navigation"
            className={clsx(
                'mt-12 pt-8 border-t border-slate-200 dark:border-slate-800',
                'flex flex-col sm:flex-row justify-between gap-4',
                className
            )}
        >
            {previous ? (
                <Link
                    to={previous.to}
                    className="group flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all flex-1"
                >
                    <ChevronRight
                        size={20}
                        className="rotate-180 text-slate-400 group-hover:text-blue-500 transition-colors"
                    />
                    <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Previous
                        </div>
                        <div className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {previous.label}
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="flex-1" />
            )}

            {next ? (
                <Link
                    to={next.to}
                    className="group flex items-center justify-end gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all flex-1 text-right"
                >
                    <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Next
                        </div>
                        <div className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {next.label}
                        </div>
                    </div>
                    <ChevronRight
                        size={20}
                        className="text-slate-400 group-hover:text-blue-500 transition-colors"
                    />
                </Link>
            ) : (
                <div className="flex-1" />
            )}
        </nav>
    );
}
