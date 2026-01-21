import { AlertCircle, AlertTriangle, CheckCircle, Info, Lightbulb, type LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type AlertVariant = 'info' | 'warning' | 'error' | 'success' | 'tip';

interface AlertProps {
    variant: AlertVariant;
    title?: string;
    children: ReactNode;
    className?: string;
}

const variantConfig: Record<AlertVariant, {
    icon: LucideIcon;
    containerClass: string;
    iconContainerClass: string;
    iconClass: string;
    titleClass: string;
    textClass: string;
}> = {
    info: {
        icon: Info,
        containerClass: 'bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 dark:border-blue-400',
        iconContainerClass: 'bg-blue-100 dark:bg-blue-900/50',
        iconClass: 'text-blue-600 dark:text-blue-400',
        titleClass: 'text-blue-900 dark:text-blue-100',
        textClass: 'text-blue-800 dark:text-blue-200',
    },
    warning: {
        icon: AlertTriangle,
        containerClass: 'bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 dark:border-amber-400',
        iconContainerClass: 'bg-amber-100 dark:bg-amber-900/50',
        iconClass: 'text-amber-600 dark:text-amber-400',
        titleClass: 'text-amber-900 dark:text-amber-100',
        textClass: 'text-amber-800 dark:text-amber-200',
    },
    error: {
        icon: AlertCircle,
        containerClass: 'bg-red-50 dark:bg-red-950/40 border-l-4 border-red-500 dark:border-red-400',
        iconContainerClass: 'bg-red-100 dark:bg-red-900/50',
        iconClass: 'text-red-600 dark:text-red-400',
        titleClass: 'text-red-900 dark:text-red-100',
        textClass: 'text-red-800 dark:text-red-200',
    },
    success: {
        icon: CheckCircle,
        containerClass: 'bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500 dark:border-emerald-400',
        iconContainerClass: 'bg-emerald-100 dark:bg-emerald-900/50',
        iconClass: 'text-emerald-600 dark:text-emerald-400',
        titleClass: 'text-emerald-900 dark:text-emerald-100',
        textClass: 'text-emerald-800 dark:text-emerald-200',
    },
    tip: {
        icon: Lightbulb,
        containerClass: 'bg-purple-50 dark:bg-purple-950/40 border-l-4 border-purple-500 dark:border-purple-400',
        iconContainerClass: 'bg-purple-100 dark:bg-purple-900/50',
        iconClass: 'text-purple-600 dark:text-purple-400',
        titleClass: 'text-purple-900 dark:text-purple-100',
        textClass: 'text-purple-800 dark:text-purple-200',
    },
};

export function Alert({ variant, title, children, className }: AlertProps) {
    const config = variantConfig[variant];
    const Icon = config.icon;

    return (
        <div
            className={clsx(
                'flex gap-3 p-4 rounded-r-lg my-5',
                config.containerClass,
                className
            )}
            role="alert"
        >
            {/* Icon container with proper alignment */}
            <div
                className={clsx(
                    'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
                    config.iconContainerClass
                )}
            >
                <Icon size={18} className={config.iconClass} aria-hidden="true" />
            </div>

            {/* Content area */}
            <div className="flex-1 min-w-0 pt-0.5">
                {title && (
                    <h4 className={clsx('font-semibold text-sm mb-1', config.titleClass)}>
                        {title}
                    </h4>
                )}
                <div className={clsx('text-sm leading-relaxed', config.textClass)}>
                    {children}
                </div>
            </div>
        </div>
    );
}

// Compact alert for inline usage
interface CompactAlertProps {
    variant: AlertVariant;
    children: ReactNode;
    className?: string;
}

export function CompactAlert({ variant, children, className }: CompactAlertProps) {
    const config = variantConfig[variant];
    const Icon = config.icon;

    return (
        <div
            className={clsx(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm',
                config.containerClass.replace('border-l-4', 'border'),
                className
            )}
            role="alert"
        >
            <Icon size={14} className={config.iconClass} aria-hidden="true" />
            <span className={config.textClass}>{children}</span>
        </div>
    );
}
