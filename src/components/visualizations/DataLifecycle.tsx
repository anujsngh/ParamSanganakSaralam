import { useEffect, useRef } from 'react';
import { useTheme } from '../theme-provider';

export function DataLifecycle() {
    const svgRef = useRef<SVGSVGElement>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = svgRef.current;

        // Clear previous content
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        // Define colors based on theme
        const colors = {
            local: isDark ? '#8b5cf6' : '#7c3aed',        // purple
            home: isDark ? '#3b82f6' : '#2563eb',         // blue
            scratch: isDark ? '#f59e0b' : '#d97706',      // orange
            compute: isDark ? '#10b981' : '#059669',      // green
            text: isDark ? '#e2e8f0' : '#1e293b',
            subtext: isDark ? '#94a3b8' : '#64748b',
            arrow: isDark ? '#64748b' : '#94a3b8',
        };

        // Data lifecycle stages
        const stages = [
            { id: 'local', label: 'Local Machine', icon: '💻', color: colors.local, x: 50, y: 150 },
            { id: 'home1', label: '/home', icon: '🏠', color: colors.home, desc: 'Backed up', x: 250, y: 150 },
            { id: 'scratch1', label: '/scratch', icon: '📂', color: colors.scratch, desc: '60-day retention', x: 450, y: 50 },
            { id: 'compute', label: 'Job Compute', icon: '⚙️', color: colors.compute, desc: 'Processing', x: 450, y: 250 },
            { id: 'scratch2', label: '/scratch', icon: '📂', color: colors.scratch, desc: 'Results', x: 650, y: 150 },
            { id: 'home2', label: '/home', icon: '🏠', color: colors.home, desc: 'Archive', x: 850, y: 150 },
            { id: 'local2', label: 'Local Machine', icon: '💾', color: colors.local, x: 1050, y: 150 },
        ];

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svg.appendChild(g);

        // Draw stages
        stages.forEach((stage, i) => {
            // Box
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', String(stage.x));
            rect.setAttribute('y', String(stage.y));
            rect.setAttribute('width', '150');
            rect.setAttribute('height', '80');
            rect.setAttribute('rx', '8');
            rect.setAttribute('fill', stage.color);
            rect.setAttribute('fill-opacity', '0.1');
            rect.setAttribute('stroke', stage.color);
            rect.setAttribute('stroke-width', '2');
            g.appendChild(rect);

            // Icon/Emoji
            const icon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            icon.setAttribute('x', String(stage.x + 20));
            icon.setAttribute('y', String(stage.y + 40));
            icon.setAttribute('font-size', '24');
            icon.textContent = stage.icon;
            g.appendChild(icon);

            // Label
            const text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text1.setAttribute('x', String(stage.x + 75));
            text1.setAttribute('y', String(stage.y + 35));
            text1.setAttribute('text-anchor', 'middle');
            text1.setAttribute('fill', stage.color);
            text1.setAttribute('font-size', '14');
            text1.setAttribute('font-weight', 'bold');
            text1.textContent = stage.label;
            g.appendChild(text1);

            // Description
            if (stage.desc) {
                const text2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text2.setAttribute('x', String(stage.x + 75));
                text2.setAttribute('y', String(stage.y + 55));
                text2.setAttribute('text-anchor', 'middle');
                text2.setAttribute('fill', colors.subtext);
                text2.setAttribute('font-size', '11');
                text2.textContent = stage.desc;
                g.appendChild(text2);
            }

            // Step number
            const stepNum = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            stepNum.setAttribute('cx', String(stage.x + 75));
            stepNum.setAttribute('cy', String(stage.y - 15));
            stepNum.setAttribute('r', '12');
            stepNum.setAttribute('fill', stage.color);
            g.appendChild(stepNum);

            const stepText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            stepText.setAttribute('x', String(stage.x + 75));
            stepText.setAttribute('y', String(stage.y - 10));
            stepText.setAttribute('text-anchor', 'middle');
            stepText.setAttribute('fill', 'white');
            stepText.setAttribute('font-size', '12');
            stepText.setAttribute('font-weight', 'bold');
            stepText.textContent = String(i + 1);
            g.appendChild(stepText);
        });

        // Draw arrows
        const drawArrow = (x1: number, y1: number, x2: number, y2: number, label: string) => {
            // Define arrowhead if not exists
            if (!svg.querySelector('#arrowhead-data')) {
                const defs = svg.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                if (!svg.querySelector('defs')) svg.insertBefore(defs, g);

                const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                marker.setAttribute('id', 'arrowhead-data');
                marker.setAttribute('markerWidth', '10');
                marker.setAttribute('markerHeight', '10');
                marker.setAttribute('refX', '9');
                marker.setAttribute('refY', '3');
                marker.setAttribute('orient', 'auto');
                const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                polygon.setAttribute('points', '0 0, 10 3, 0 6');
                polygon.setAttribute('fill', colors.arrow);
                marker.appendChild(polygon);
                defs.appendChild(marker);
            }

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', String(x1));
            line.setAttribute('y1', String(y1));
            line.setAttribute('x2', String(x2));
            line.setAttribute('y2', String(y2));
            line.setAttribute('stroke', colors.arrow);
            line.setAttribute('stroke-width', '2');
            line.setAttribute('marker-end', 'url(#arrowhead-data)');
            line.setAttribute('stroke-dasharray', '5,5');
            g.appendChild(line);

            // Label
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', String((x1 + x2) / 2));
            text.setAttribute('y', String((y1 + y2) / 2 - 5));
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', colors.subtext);
            text.setAttribute('font-size', '10');
            text.textContent = label;
            g.appendChild(text);
        };

        // Draw workflow arrows
        drawArrow(200, 190, 250, 190, 'Upload');
        drawArrow(400, 170, 450, 90, 'Copy input');
        drawArrow(525, 130, 525, 250, 'Read/Write');
        drawArrow(600, 270, 650, 210, 'Output');
        drawArrow(800, 190, 850, 190, 'Archive');
        drawArrow(1000, 190, 1050, 190, 'Backup');

    }, [isDark]);

    return (
        <div className="my-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-x-auto">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400">🔄</span>
                HPC Data Lifecycle Workflow
            </h4>
            <svg
                ref={svgRef}
                width="1200"
                height="350"
                className="overflow-visible"
                style={{ minWidth: '1200px' }}
            />
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <span className="text-slate-600 dark:text-slate-400">/home: Backed up, Permanent storage</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-orange-600 dark:bg-orange-400 rounded-full"></span>
                    <span className="text-slate-600 dark:text-slate-400">/scratch: NOT backed up, 60-day retention</span>
                </div>
            </div>
        </div>
    );
}
