import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

type CardVariant = 'default' | 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'indigo' | 'teal' | 'pink';

interface InfoCardProps {
    title: string;
    icon?: LucideIcon;
    variant?: CardVariant;
    children: ReactNode;
    className?: string;
}

const variantConfig: Record<CardVariant, {
    containerClass: string;
    iconClass: string;
    titleClass: string;
}> = {
    default: {
        containerClass: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800',
        iconClass: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
        titleClass: 'text-slate-900 dark:text-slate-100',
    },
    blue: {
        containerClass: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50',
        iconClass: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        titleClass: 'text-blue-800 dark:text-blue-300',
    },
    purple: {
        containerClass: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-900/50',
        iconClass: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
        titleClass: 'text-purple-800 dark:text-purple-300',
    },
    green: {
        containerClass: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-900/50',
        iconClass: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
        titleClass: 'text-emerald-800 dark:text-emerald-300',
    },
    orange: {
        containerClass: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-900/50',
        iconClass: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
        titleClass: 'text-orange-800 dark:text-orange-300',
    },
    red: {
        containerClass: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50',
        iconClass: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
        titleClass: 'text-red-800 dark:text-red-300',
    },
    indigo: {
        containerClass: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-900/50',
        iconClass: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
        titleClass: 'text-indigo-800 dark:text-indigo-300',
    },
    teal: {
        containerClass: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-900/50',
        iconClass: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
        titleClass: 'text-teal-800 dark:text-teal-300',
    },
    pink: {
        containerClass: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-900/50',
        iconClass: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
        titleClass: 'text-pink-800 dark:text-pink-300',
    },
};

export function InfoCard({ title, icon: Icon, variant = 'default', children, className }: InfoCardProps) {
    const config = variantConfig[variant];

    return (
        <div
            className={clsx(
                'p-5 rounded-xl border shadow-sm',
                config.containerClass,
                className
            )}
        >
            {Icon && (
                <div className={clsx('w-10 h-10 rounded-lg flex items-center justify-center mb-3', config.iconClass)}>
                    <Icon size={20} aria-hidden="true" />
                </div>
            )}
            <h3 className={clsx('text-base font-semibold mb-2', config.titleClass)}>
                {title}
            </h3>
            <div className="text-sm text-slate-600 dark:text-slate-400">
                {children}
            </div>
        </div>
    );
}

// Compact version for grids
interface CompactCardProps {
    title: string;
    description?: string;
    code?: string;
    variant?: CardVariant;
    className?: string;
}

export function CompactCard({ title, description, code, variant = 'default', className }: CompactCardProps) {
    const config = variantConfig[variant];

    return (
        <div className={clsx('p-4 rounded-lg border', config.containerClass, className)}>
            <h4 className={clsx('font-semibold text-sm mb-1', config.titleClass)}>
                {title}
            </h4>
            {description && (
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{description}</p>
            )}
            {code && (
                <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded block font-mono">
                    {code}
                </code>
            )}
        </div>
    );
}
