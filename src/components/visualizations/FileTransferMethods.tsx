import { useEffect, useRef } from 'react';
import { useTheme } from '../theme-provider';

export function FileTransferMethods() {
    const svgRef = useRef<SVGSVGElement>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = svgRef.current;
        const width = svg.clientWidth;

        // Clear previous content
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        // Define colors
        const colors = {
            beginner: isDark ? '#10b981' : '#059669',      // green
            advanced: isDark ? '#3b82f6' : '#2563eb',      // blue
            text: isDark ? '#e2e8f0' : '#1e293b',
            subtext: isDark ? '#94a3b8' : '#64748b',
            bg: isDark ? '#1e293b' : '#f8fafc',
            cardBg: isDark ? '#334155' : '#ffffff',
        };

        // Transfer methods
        const methods = [
            {
                name: 'WinSCP/MobaXterm',
                icon: '🖱️',
                level: 'Beginner',
                levelColor: colors.beginner,
                speed: '⭐⭐⭐',
                features: ['Drag & Drop', 'Visual Interface', 'Easy Setup'],
                pros: 'User-friendly GUI',
                cons: 'Slower for large files',
                x: 50,
                y: 50,
            },
            {
                name: 'SCP',
                icon: '⚡',
                level: 'Intermediate',
                levelColor: colors.advanced,
                speed: '⭐⭐⭐⭐',
                features: ['One-time transfer', 'Fast', 'Simple command'],
                pros: 'Quick & simple',
                cons: 'No resume support',
                x: 300,
                y: 50,
            },
            {
                name: 'rsync',
                icon: '🔄',
                level: 'Advanced',
                levelColor: colors.advanced,
                speed: '⭐⭐⭐⭐⭐',
                features: ['Incremental sync', 'Resume support', 'Very efficient'],
                pros: 'Best for large datasets',
                cons: 'Complex syntax',
                x: 550,
                y: 50,
            },
            {
                name: 'SFTP',
                icon: '📂',
                level: 'Intermediate',
                levelColor: colors.beginner,
                speed: '⭐⭐⭐',
                features: ['Interactive browse', 'Navigate remotely', 'FTP-like'],
                pros: 'Browse before transfer',
                cons: 'Slower than SCP',
                x: 800,
                y: 50,
            },
        ];

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svg.appendChild(g);

        // Draw header
        const headerBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        headerBg.setAttribute('x', '0');
        headerBg.setAttribute('y', '0');
        headerBg.setAttribute('width', String(width));
        headerBg.setAttribute('height', '40');
        headerBg.setAttribute('fill', isDark ? '#1e293b' : '#f1f5f9');
        g.appendChild(headerBg);

        const headerText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        headerText.setAttribute('x', String(width / 2));
        headerText.setAttribute('y', '25');
        headerText.setAttribute('text-anchor', 'middle');
        headerText.setAttribute('fill', colors.text);
        headerText.setAttribute('font-size', '16');
        headerText.setAttribute('font-weight', 'bold');
        headerText.textContent = '💻 Local Machine ↔️ 🖥️ HPC Server';
        g.appendChild(headerText);

        // Draw method cards
        methods.forEach((method) => {
            // Card background
            const card = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            card.setAttribute('x', String(method.x));
            card.setAttribute('y', String(method.y));
            card.setAttribute('width', '220');
            card.setAttribute('height', '350');
            card.setAttribute('rx', '12');
            card.setAttribute('fill', colors.cardBg);
            card.setAttribute('stroke', method.levelColor);
            card.setAttribute('stroke-width', '2');
            g.appendChild(card);

            let yPos = method.y + 30;

            // Icon
            const icon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            icon.setAttribute('x', String(method.x + 110));
            icon.setAttribute('y', String(yPos));
            icon.setAttribute('text-anchor', 'middle');
            icon.setAttribute('font-size', '36');
            icon.textContent = method.icon;
            g.appendChild(icon);

            yPos += 40;

            // Name
            const name = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            name.setAttribute('x', String(method.x + 110));
            name.setAttribute('y', String(yPos));
            name.setAttribute('text-anchor', 'middle');
            name.setAttribute('fill', colors.text);
            name.setAttribute('font-size', '16');
            name.setAttribute('font-weight', 'bold');
            name.textContent = method.name;
            g.appendChild(name);

            yPos += 25;

            // Level badge
            const badge = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            badge.setAttribute('x', String(method.x + 60));
            badge.setAttribute('y', String(yPos - 15));
            badge.setAttribute('width', '100');
            badge.setAttribute('height', '22');
            badge.setAttribute('rx', '11');
            badge.setAttribute('fill', method.levelColor);
            badge.setAttribute('fill-opacity', '0.2');
            g.appendChild(badge);

            const levelText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            levelText.setAttribute('x', String(method.x + 110));
            levelText.setAttribute('y', String(yPos));
            levelText.setAttribute('text-anchor', 'middle');
            levelText.setAttribute('fill', method.levelColor);
            levelText.setAttribute('font-size', '12');
            levelText.setAttribute('font-weight', 'bold');
            levelText.textContent = method.level;
            g.appendChild(levelText);

            yPos += 30;

            // Speed
            const speedLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            speedLabel.setAttribute('x', String(method.x + 110));
            speedLabel.setAttribute('y', String(yPos));
            speedLabel.setAttribute('text-anchor', 'middle');
            speedLabel.setAttribute('fill', colors.subtext);
            speedLabel.setAttribute('font-size', '11');
            speedLabel.textContent = 'Speed';
            g.appendChild(speedLabel);

            yPos += 20;

            const speed = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            speed.setAttribute('x', String(method.x + 110));
            speed.setAttribute('y', String(yPos));
            speed.setAttribute('text-anchor', 'middle');
            speed.setAttribute('fill', colors.text);
            speed.setAttribute('font-size', '14');
            speed.textContent = method.speed;
            g.appendChild(speed);

            yPos += 30;

            // Features
            method.features.forEach((feature) => {
                const feat = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                feat.setAttribute('x', String(method.x + 20));
                feat.setAttribute('y', String(yPos));
                feat.setAttribute('fill', colors.text);
                feat.setAttribute('font-size', '11');
                feat.textContent = `✓ ${feature}`;
                g.appendChild(feat);
                yPos += 20;
            });

            yPos += 10;

            // Pros
            const prosLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            prosLabel.setAttribute('x', String(method.x + 20));
            prosLabel.setAttribute('y', String(yPos));
            prosLabel.setAttribute('fill', colors.beginner);
            prosLabel.setAttribute('font-size', '10');
            prosLabel.setAttribute('font-weight', 'bold');
            prosLabel.textContent = 'PRO:';
            g.appendChild(prosLabel);

            const pros = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            pros.setAttribute('x', String(method.x + 20));
            pros.setAttribute('y', String(yPos + 15));
            pros.setAttribute('fill', colors.subtext);
            pros.setAttribute('font-size', '10');
            pros.textContent = method.pros;
            g.appendChild(pros);

            yPos += 35;

            // Cons
            const consLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            consLabel.setAttribute('x', String(method.x + 20));
            consLabel.setAttribute('y', String(yPos));
            consLabel.setAttribute('fill', '#ef4444');
            consLabel.setAttribute('font-size', '10');
            consLabel.setAttribute('font-weight', 'bold');
            consLabel.textContent = 'CON:';
            g.appendChild(consLabel);

            const cons = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            cons.setAttribute('x', String(method.x + 20));
            cons.setAttribute('y', String(yPos + 15));
            cons.setAttribute('fill', colors.subtext);
            cons.setAttribute('font-size', '10');
            cons.textContent = method.cons;
            g.appendChild(cons);
        });

    }, [isDark]);

    return (
        <div className="my-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-x-auto">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">📤</span>
                File Transfer Methods Comparison
            </h4>
            <svg
                ref={svgRef}
                width="1100"
                height="450"
                className="overflow-visible"
                style={{ minWidth: '1100px' }}
            />
            <div className="mt-4 flex gap-4 text-xs justify-center">
                <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full"></span>
                    <span className="text-slate-600 dark:text-slate-400">Beginner-friendly</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <span className="text-slate-600 dark:text-slate-400">Advanced users</span>
                </div>
            </div>
        </div>
    );
}
