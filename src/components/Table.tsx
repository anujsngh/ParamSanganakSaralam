import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface TableProps {
    children: ReactNode;
    className?: string;
    caption?: string;
    compact?: boolean;
}

export function Table({ children, className, caption, compact = false }: TableProps) {
    return (
        <div className={clsx('overflow-x-auto my-6 -mx-4 sm:mx-0', className)}>
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                <div className="overflow-hidden border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
                    <table className={clsx(
                        'min-w-full divide-y divide-slate-200 dark:divide-slate-700',
                        compact && 'text-sm'
                    )}>
                        {caption && (
                            <caption className="sr-only">{caption}</caption>
                        )}
                        {children}
                    </table>
                </div>
            </div>
        </div>
    );
}

interface TableHeadProps {
    children: ReactNode;
    className?: string;
}

export function TableHead({ children, className }: TableHeadProps) {
    return (
        <thead className={clsx('bg-slate-50 dark:bg-slate-800/80', className)}>
            {children}
        </thead>
    );
}

interface TableBodyProps {
    children: ReactNode;
    className?: string;
}

export function TableBody({ children, className }: TableBodyProps) {
    return (
        <tbody className={clsx(
            'divide-y divide-slate-200 dark:divide-slate-700/50 bg-white dark:bg-slate-900',
            className
        )}>
            {children}
        </tbody>
    );
}

interface TableRowProps {
    children: ReactNode;
    className?: string;
    highlight?: boolean;
    hoverable?: boolean;
}

export function TableRow({ children, className, highlight, hoverable = true }: TableRowProps) {
    return (
        <tr className={clsx(
            highlight && 'bg-blue-50 dark:bg-blue-900/20',
            hoverable && 'hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors',
            className
        )}>
            {children}
        </tr>
    );
}

interface TableHeaderCellProps {
    children: ReactNode;
    className?: string;
    scope?: 'col' | 'row';
    align?: 'left' | 'center' | 'right';
}

export function TableHeaderCell({ children, className, scope = 'col', align = 'left' }: TableHeaderCellProps) {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <th
            scope={scope}
            className={clsx(
                'px-3 sm:px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400',
                alignClasses[align],
                className
            )}
        >
            {children}
        </th>
    );
}

interface TableCellProps {
    children: ReactNode;
    className?: string;
    highlight?: boolean;
    mono?: boolean;
    wrap?: boolean;
    align?: 'left' | 'center' | 'right';
}

export function TableCell({ children, className, highlight, mono, wrap = false, align = 'left' }: TableCellProps) {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <td className={clsx(
            'px-3 sm:px-4 py-3 text-sm text-slate-700 dark:text-slate-300',
            !wrap && 'whitespace-nowrap',
            wrap && 'whitespace-normal break-words',
            highlight && 'font-semibold text-blue-600 dark:text-blue-400',
            mono && 'font-mono text-xs bg-slate-50 dark:bg-slate-800/50',
            alignClasses[align],
            className
        )}>
            {children}
        </td>
    );
}

// Badge component for use in tables
interface BadgeProps {
    children: ReactNode;
    variant?: 'success' | 'error' | 'warning' | 'info' | 'default' | 'purple';
    size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
    const variantClasses = {
        success: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
        error: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
        warning: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
        info: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        purple: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
        default: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    };

    const sizeClasses = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
    };

    return (
        <span className={clsx(
            'inline-flex items-center rounded-full font-medium border',
            variantClasses[variant],
            sizeClasses[size]
        )}>
            {children}
        </span>
    );
}

// Simple Key-Value display for responsive alternatives to tables
interface KeyValueListProps {
    items: { key: string; value: ReactNode }[];
    className?: string;
}

export function KeyValueList({ items, className }: KeyValueListProps) {
    return (
        <dl className={clsx('space-y-3', className)}>
            {items.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-slate-200 dark:border-slate-800 last:border-0">
                    <dt className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.key}</dt>
                    <dd className="text-sm text-slate-900 dark:text-slate-100 font-mono">{item.value}</dd>
                </div>
            ))}
        </dl>
    );
}
