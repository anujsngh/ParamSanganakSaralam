import { createHighlighter, type Highlighter, type BundledLanguage, type BundledTheme } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;

export async function getHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: ['github-light', 'github-dark'] as BundledTheme[],
            langs: [
                // Web languages
                'javascript',
                'typescript',
                'tsx',
                'jsx',
                'css',
                'json',
                'html',
                'markdown',
                // Shell/Terminal
                'bash',
                'sh',
                'shell',
                'shellscript',
                'zsh',
                'powershell',
                // HPC/Scientific languages
                'c',
                'cpp',
                'fortran-free-form',
                'fortran-fixed-form',
                'python',
                // Config files
                'yaml',
                'toml',
                'ini',
                // Additional useful languages
                'makefile',
                'dockerfile',
                'sql',
            ] as BundledLanguage[]
        });
    }
    return highlighterPromise;
}
