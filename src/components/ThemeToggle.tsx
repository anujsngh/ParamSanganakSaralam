import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";
import { clsx } from "clsx";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const options = [
        { value: 'light' as const, icon: Sun, label: 'Light mode' },
        { value: 'system' as const, icon: Monitor, label: 'System theme' },
        { value: 'dark' as const, icon: Moon, label: 'Dark mode' },
    ];

    return (
        <div
            className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700"
            role="radiogroup"
            aria-label="Theme selection"
        >
            {options.map(({ value, icon: Icon, label }) => (
                <button
                    key={value}
                    onClick={() => setTheme(value)}
                    className={clsx(
                        "p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
                        theme === value
                            ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                    )}
                    role="radio"
                    aria-checked={theme === value}
                    aria-label={label}
                    title={label}
                >
                    <Icon size={16} aria-hidden="true" />
                </button>
            ))}
        </div>
    );
}
