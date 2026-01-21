import { useState, useEffect, useId } from 'react';
import { Monitor, Terminal } from 'lucide-react';
import { clsx } from 'clsx';
import { CodeBlock } from './CodeBlock';

type Platform = 'windows' | 'linux' | 'mac';

interface PlatformTabsProps {
    windows?: string;
    linux?: string;
    mac?: string;
    title?: string;
    storageKey?: string;
}

// Custom Mac/Apple logo icon component
const AppleLogo = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
);

function getInitialPlatform(): Platform {
    if (typeof window === 'undefined') return 'linux';

    try {
        const saved = localStorage.getItem('preferred-platform');
        if (saved && ['windows', 'linux', 'mac'].includes(saved)) {
            return saved as Platform;
        }
    } catch {
        // localStorage might not be available
    }

    // Try to detect platform from user agent
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('win')) return 'windows';
    if (ua.includes('mac')) return 'mac';
    return 'linux';
}

export function PlatformTabs({ windows, linux, mac, title, storageKey }: PlatformTabsProps) {
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(getInitialPlatform);
    const tablistId = useId();
    const panelId = useId();

    useEffect(() => {
        try {
            localStorage.setItem('preferred-platform', selectedPlatform);
        } catch {
            // Ignore localStorage errors
        }
    }, [selectedPlatform]);

    const platforms = [
        { id: 'linux' as Platform, label: 'Linux', icon: Terminal, content: linux },
        { id: 'mac' as Platform, label: 'macOS', icon: AppleLogo, content: mac },
        { id: 'windows' as Platform, label: 'Windows', icon: Monitor, content: windows },
    ].filter(p => p.content);

    if (platforms.length === 0) return null;

    // If selected platform doesn't have content, select first available
    const activeTab = platforms.find(p => p.id === selectedPlatform) || platforms[0];
    const activeContent = activeTab.content || '';

    const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
        let newIndex = currentIndex;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            newIndex = (currentIndex + 1) % platforms.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            newIndex = (currentIndex - 1 + platforms.length) % platforms.length;
        } else if (e.key === 'Home') {
            e.preventDefault();
            newIndex = 0;
        } else if (e.key === 'End') {
            e.preventDefault();
            newIndex = platforms.length - 1;
        } else {
            return;
        }

        setSelectedPlatform(platforms[newIndex].id);
        // Focus the new tab
        const tabButton = document.querySelector(`[data-tab-id="${platforms[newIndex].id}"]`) as HTMLElement;
        tabButton?.focus();
    };

    return (
        <div className="my-6 not-prose">
            {title && (
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    {title}
                </h4>
            )}

            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm">
                {/* Tab buttons */}
                <div
                    className="flex bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
                    role="tablist"
                    aria-label={`${title || 'Platform'} options`}
                    id={tablistId}
                >
                    {platforms.map(({ id, label, icon: Icon }, index) => {
                        const isSelected = activeTab.id === id;
                        return (
                            <button
                                key={id}
                                data-tab-id={id}
                                onClick={() => setSelectedPlatform(id)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className={clsx(
                                    "flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
                                    isSelected
                                        ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 -mb-px"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                                )}
                                aria-selected={isSelected}
                                aria-controls={panelId}
                                role="tab"
                                tabIndex={isSelected ? 0 : -1}
                                id={`${storageKey || tablistId}-tab-${id}`}
                            >
                                <Icon size={16} aria-hidden="true" />
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab content */}
                <div
                    role="tabpanel"
                    id={panelId}
                    aria-labelledby={`${storageKey || tablistId}-tab-${activeTab.id}`}
                    className="bg-slate-50 dark:bg-slate-900"
                    tabIndex={0}
                >
                    <CodeBlock
                        code={activeContent}
                        language="bash"
                        className="my-0 border-none shadow-none rounded-none rounded-b-lg"
                    />
                </div>
            </div>
        </div>
    );
}
