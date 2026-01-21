import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface Step {
    title: string;
    content: ReactNode;
    isComplete?: boolean;
}

interface StepListProps {
    steps: Step[];
    variant?: 'numbered' | 'timeline';
    className?: string;
}

export function StepList({ steps, variant = 'numbered', className }: StepListProps) {
    if (variant === 'timeline') {
        return (
            <div className={clsx('space-y-0', className)}>
                {steps.map((step, index) => (
                    <div key={index} className="relative pl-8 pb-8 last:pb-0">
                        {/* Vertical line */}
                        {index < steps.length - 1 && (
                            <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                        )}
                        {/* Step number circle */}
                        <div className={clsx(
                            'absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm',
                            step.isComplete
                                ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        )}>
                            {index + 1}
                        </div>
                        {/* Content */}
                        <div className="pt-1">
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                {step.title}
                            </h4>
                            <div className="text-sm text-slate-700 dark:text-slate-300">
                                {step.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Numbered variant (simpler)
    return (
        <div className={clsx('space-y-6', className)}>
            {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                    <div className={clsx(
                        'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold',
                        step.isComplete
                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    )}>
                        {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            {step.title}
                        </h4>
                        <div className="text-sm text-slate-700 dark:text-slate-300">
                            {step.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Simple ordered list with better styling
interface OrderedStepsProps {
    children: ReactNode;
    className?: string;
    startFrom?: number;
}

export function OrderedSteps({ children, className, startFrom = 1 }: OrderedStepsProps) {
    // Clone children and pass index as number prop
    const childrenArray = Array.isArray(children) ? children : [children];
    const numberedChildren = childrenArray.map((child, index) => {
        if (child && typeof child === 'object' && 'type' in child) {
            return {
                ...child,
                props: {
                    ...child.props,
                    _stepNumber: startFrom + index,
                },
            };
        }
        return child;
    });

    return (
        <ol className={clsx(
            'list-none pl-0 space-y-3',
            className
        )}
        role="list"
        aria-label="Ordered steps"
        >
            {numberedChildren}
        </ol>
    );
}

interface OrderedStepItemProps {
    children: ReactNode;
    _stepNumber?: number;
    variant?: 'default' | 'compact';
}

export function OrderedStepItem({ children, _stepNumber, variant = 'default' }: OrderedStepItemProps) {
    return (
        <li className={clsx(
            "flex items-start",
            variant === 'default' ? 'gap-3' : 'gap-2'
        )}>
            <span
                className={clsx(
                    "flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold flex items-center justify-center",
                    variant === 'default' ? 'w-6 h-6 text-xs mt-0.5' : 'w-5 h-5 text-[10px] mt-0.5'
                )}
                aria-hidden="true"
            >
                {_stepNumber}
            </span>
            <div className={clsx(
                "flex-1 text-slate-700 dark:text-slate-300",
                variant === 'default' ? 'text-sm' : 'text-xs'
            )}>
                {children}
            </div>
        </li>
    );
}
