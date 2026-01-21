import { Check, Copy, Terminal, FileCode } from 'lucide-react';
import { useState, useEffect, useId } from 'react';
import { getHighlighter } from '../lib/highlighter';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
    className?: string;
    showLineNumbers?: boolean;
}

// Language display names and icons
const languageConfig: Record<string, { name: string; terminal: boolean }> = {
    // Shell/Terminal languages
    bash: { name: 'Terminal', terminal: true },
    sh: { name: 'Shell', terminal: true },
    shell: { name: 'Shell', terminal: true },
    shellscript: { name: 'Shell', terminal: true },
    zsh: { name: 'Zsh', terminal: true },
    powershell: { name: 'PowerShell', terminal: true },
    // Programming languages
    python: { name: 'Python', terminal: false },
    py: { name: 'Python', terminal: false },
    javascript: { name: 'JavaScript', terminal: false },
    js: { name: 'JavaScript', terminal: false },
    typescript: { name: 'TypeScript', terminal: false },
    ts: { name: 'TypeScript', terminal: false },
    // HPC/Scientific languages
    c: { name: 'C', terminal: false },
    cpp: { name: 'C++', terminal: false },
    'c++': { name: 'C++', terminal: false },
    fortran: { name: 'Fortran', terminal: false },
    'fortran-free-form': { name: 'Fortran', terminal: false },
    'fortran-fixed-form': { name: 'Fortran', terminal: false },
    f90: { name: 'Fortran', terminal: false },
    f95: { name: 'Fortran', terminal: false },
    // Config files
    json: { name: 'JSON', terminal: false },
    yaml: { name: 'YAML', terminal: false },
    yml: { name: 'YAML', terminal: false },
    toml: { name: 'TOML', terminal: false },
    ini: { name: 'INI', terminal: false },
    // Web languages
    html: { name: 'HTML', terminal: false },
    css: { name: 'CSS', terminal: false },
    // Documentation
    markdown: { name: 'Markdown', terminal: false },
    md: { name: 'Markdown', terminal: false },
    // Build/Dev tools
    makefile: { name: 'Makefile', terminal: false },
    make: { name: 'Makefile', terminal: false },
    dockerfile: { name: 'Dockerfile', terminal: false },
    docker: { name: 'Dockerfile', terminal: false },
    sql: { name: 'SQL', terminal: false },
    // Fallbacks
    plaintext: { name: 'Text', terminal: false },
    text: { name: 'Text', terminal: false },
};

export function CodeBlock({ code, language = 'bash', title, className, showLineNumbers = false }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const [html, setHtml] = useState<string>('');
    const codeBlockId = useId();

    useEffect(() => {
        let mounted = true;

        async function highlight() {
            try {
                const highlighter = await getHighlighter();

                // Normalize language ID
                let langId = language;
                if (['fortran', 'f90', 'f95'].includes(language)) {
                    langId = 'fortran-free-form';
                } else if (['f', 'f77', 'fortran-fixed'].includes(language)) {
                    langId = 'fortran-fixed-form';
                }

                const result = highlighter.codeToHtml(code, {
                    lang: langId as any,
                    themes: {
                        light: 'github-light',
                        dark: 'github-dark'
                    },
                    defaultColor: false, // Important: Use CSS variables instead of inline colors
                });

                if (mounted) {
                    setHtml(result);
                }
            } catch (error) {
                // Fallback to simple pre for unsupported languages
                console.warn(`Syntax highlighting failed for language "${language}":`, error);
                if (mounted) {
                    const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    setHtml(`<pre><code>${escapedCode}</code></pre>`);
                }
            }
        }

        highlight();

        return () => {
            mounted = false;
        };
    }, [code, language]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const config = languageConfig[language] || { name: language, terminal: false };
    const displayTitle = title || config.name;
    const isTerminal = config.terminal;

    return (
        <div
            className={cn(
                "my-5 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all duration-200",
                className
            )}
            role="region"
            aria-label={`Code block: ${displayTitle}`}
        >
            {/* Header with improved styling */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                    {/* Terminal dots for shell commands */}
                    {isTerminal && (
                        <div className="flex items-center gap-1.5 mr-2" aria-hidden="true">
                            <span className="w-3 h-3 rounded-full bg-red-400/80 dark:bg-red-500/60" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400/80 dark:bg-yellow-500/60" />
                            <span className="w-3 h-3 rounded-full bg-green-400/80 dark:bg-green-500/60" />
                        </div>
                    )}
                    {isTerminal ? (
                        <Terminal size={14} className="text-slate-500 dark:text-slate-400" aria-hidden="true" />
                    ) : (
                        <FileCode size={14} className="text-slate-500 dark:text-slate-400" aria-hidden="true" />
                    )}
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 font-mono tracking-wide">
                        {displayTitle}
                    </span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className={cn(
                        "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-150",
                        copied
                            ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                    aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
                    aria-describedby={codeBlockId}
                >
                    {copied ? (
                        <>
                            <Check size={14} aria-hidden="true" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy size={14} aria-hidden="true" />
                            <span className="hidden sm:inline">Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Syntax Highlighter Output with improved styling */}
            <div id={codeBlockId} className="relative group">
                {!html ? (
                    <div className="p-4 bg-white dark:bg-slate-950 h-16 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-slate-200 dark:border-slate-700 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                ) : (
                    <div
                        className={cn(
                            "shiki-container text-sm leading-relaxed overflow-x-auto p-4 bg-white dark:bg-slate-950 transition-colors duration-200",
                            "font-mono",
                            showLineNumbers && "pl-12"
                        )}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                )}
            </div>
        </div>
    );
}

// Inline code component for use in text
interface InlineCodeProps {
    children: React.ReactNode;
    className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
    return (
        <code
            className={cn(
                "px-1.5 py-0.5 rounded-md text-sm font-mono",
                "bg-slate-100 dark:bg-slate-800",
                "text-pink-600 dark:text-pink-400",
                "border border-slate-200 dark:border-slate-700",
                className
            )}
        >
            {children}
        </code>
    );
}
