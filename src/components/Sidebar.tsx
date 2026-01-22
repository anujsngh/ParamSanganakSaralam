import { NavLink } from 'react-router-dom';
import {
    Home,
    Server,
    CreditCard,
    Terminal,
    Code2,
    HelpCircle,
    Menu,
    X,
    Bug,
    ShieldCheck,
    Scale,
    GraduationCap,
    ExternalLink,
    BookOpen,
    Github
} from 'lucide-react';
import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Linux & MPI Basics', path: '/linux-basics' },
    { icon: GraduationCap, label: 'Getting Started', path: '/getting-started' },
    { icon: Server, label: 'Core Concepts', path: '/core-concepts' },
    { icon: CreditCard, label: 'Account Management', path: '/account-management' },
    { icon: Terminal, label: 'Running Jobs', path: '/running-jobs' },
    { icon: Code2, label: 'Applications', path: '/applications' },
    { icon: Bug, label: 'Debugging', path: '/debugging' },
    { icon: ShieldCheck, label: 'Best Practices', path: '/best-practices' },
    { icon: Scale, label: 'Usage Policy', path: '/usage-policy' },
    { icon: HelpCircle, label: 'Support & Help', path: '/support' },
];

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile header bar */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between px-4 h-14">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        aria-controls="sidebar-navigation"
                    >
                        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                    </button>
                    <h1 className="text-base font-bold">
                        <NavLink to="/" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Param Sanganak
                        </NavLink>
                    </h1>
                    <ThemeToggle />
                </div>
            </header>

            {/* Mobile spacer */}
            <div className="lg:hidden h-14" />

            {/* Sidebar */}
            <aside
                id="sidebar-navigation"
                className={clsx(
                    "fixed inset-y-0 left-0 z-40 w-72 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:w-64",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="h-full flex flex-col">
                    {/* Header - hidden on mobile (shown in mobile header bar) */}
                    <div className="hidden lg:block p-6 border-b border-slate-200 dark:border-slate-800">
                        <h1 className="text-xl font-bold">
                            <NavLink to="/" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Param Sanganak
                            </NavLink>
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">User Documentation</p>
                    </div>

                    {/* Mobile header spacer */}
                    <div className="lg:hidden h-14" />

                    {/* Navigation links */}
                    <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto" aria-label="Documentation sections">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => clsx(
                                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                                    isActive
                                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                )}
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon
                                            size={18}
                                            className={clsx(
                                                "flex-shrink-0",
                                                isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500"
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span aria-current={isActive ? "page" : undefined}>{item.label}</span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Footer section */}
                    <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                        {/* Quick links */}
                        <div className="space-y-2">
                            <a
                                href="https://paramsanganak.iitk.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <ExternalLink size={14} aria-hidden="true" />
                                Official Portal
                            </a>
                            <a
                                href="https://github.com/anujsngh/ParamSanganakSaralam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <Github size={14} aria-hidden="true" />
                                Contribute on GitHub
                            </a>
                        </div>

                        {/* Support button */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 shadow-lg">
                            <p className="text-xs text-slate-400 mb-3">Need help?</p>
                            <a
                                href="mailto:sanganaksupport@iitk.ac.in"
                                className="block w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg text-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Contact support via email at sanganaksupport@iitk.ac.in"
                            >
                                Contact Support
                            </a>
                        </div>

                        {/* Theme toggle - only show on desktop */}
                        <div className="hidden lg:flex justify-between items-center px-2 pt-2">
                            <span className="text-xs text-slate-500 dark:text-slate-400">Theme</span>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile - close menu when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden animate-fade-in"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
}
