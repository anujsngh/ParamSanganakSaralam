import { clsx } from 'clsx';
import type { LucideIcon } from 'lucide-react';

type HeaderVariant = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'indigo' | 'teal';

interface PageHeaderProps {
    icon: LucideIcon;
    badge: string;
    title: string;
    description: string;
    variant?: HeaderVariant;
}

const variantColors: Record<HeaderVariant, string> = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    green: 'text-emerald-600 dark:text-emerald-400',
    orange: 'text-orange-600 dark:text-orange-400',
    red: 'text-red-600 dark:text-red-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
    teal: 'text-teal-600 dark:text-teal-400',
};

export function PageHeader({ icon: Icon, badge, title, description, variant = 'blue' }: PageHeaderProps) {
    return (
        <header className="mb-8">
            <div className={clsx('flex items-center gap-3 mb-3', variantColors[variant])}>
                <Icon size={24} aria-hidden="true" />
                <span className="font-semibold uppercase tracking-wider text-sm">{badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
                {description}
            </p>
        </header>
    );
}

// Section header for subsections within a page
interface SectionHeaderProps {
    icon?: LucideIcon;
    title: string;
    id?: string;
    variant?: HeaderVariant;
}

export function SectionHeader({ icon: Icon, title, id, variant = 'blue' }: SectionHeaderProps) {
    return (
        <div className="flex items-center gap-3 mb-4" id={id}>
            {Icon && <Icon size={24} className={variantColors[variant]} aria-hidden="true" />}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 m-0">
                {title}
            </h2>
        </div>
    );
}

// Divider between sections
export function SectionDivider() {
    return (
        <hr className="my-10 border-slate-200 dark:border-slate-800" />
    );
}
