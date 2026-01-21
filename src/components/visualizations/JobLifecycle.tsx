import { useEffect, useRef } from 'react';
import { useTheme } from '../theme-provider';

export function JobLifecycle() {
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

        // Define colors based on theme
        const colors = {
            pending: isDark ? '#60a5fa' : '#3b82f6',      // blue
            running: isDark ? '#34d399' : '#10b981',      // green
            completed: isDark ? '#a78bfa' : '#8b5cf6',    // purple
            failed: isDark ? '#f87171' : '#ef4444',       // red
            cancelled: isDark ? '#fbbf24' : '#f59e0b',    // amber
            text: isDark ? '#e2e8f0' : '#1e293b',
            subtext: isDark ? '#94a3b8' : '#64748b',
            arrow: isDark ? '#64748b' : '#94a3b8',
            bg: isDark ? '#1e293b' : '#f8fafc',
        };

        // Job states
        const states = [
            { id: 'pending', label: 'PENDING', desc: 'Queued', color: colors.pending, y: 100 },
            { id: 'running', label: 'RUNNING', desc: 'Executing', color: colors.running, y: 250 },
            { id: 'completed', label: 'COMPLETED', desc: 'Success', color: colors.completed, y: 400 },
            { id: 'failed', label: 'FAILED', desc: 'Error', color: colors.failed, y: 400 },
            { id: 'cancelled', label: 'CANCELLED', desc: 'Stopped', color: colors.cancelled, y: 400 },
        ];

        // Create SVG groups
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svg.appendChild(g);

        // Draw state boxes
        states.forEach((state, i) => {
            const x = i < 2 ? width / 2 - 100 : (i - 2) * 200 + 50;
            const y = state.y;

            // Box
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', String(x));
            rect.setAttribute('y', String(y));
            rect.setAttribute('width', '200');
            rect.setAttribute('height', '80');
            rect.setAttribute('rx', '8');
            rect.setAttribute('fill', state.color);
            rect.setAttribute('fill-opacity', '0.1');
            rect.setAttribute('stroke', state.color);
            rect.setAttribute('stroke-width', '2');
            g.appendChild(rect);

            // Label
            const text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text1.setAttribute('x', String(x + 100));
            text1.setAttribute('y', String(y + 35));
            text1.setAttribute('text-anchor', 'middle');
            text1.setAttribute('fill', state.color);
            text1.setAttribute('font-size', '16');
            text1.setAttribute('font-weight', 'bold');
            text1.textContent = state.label;
            g.appendChild(text1);

            // Description
            const text2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text2.setAttribute('x', String(x + 100));
            text2.setAttribute('y', String(y + 55));
            text2.setAttribute('text-anchor', 'middle');
            text2.setAttribute('fill', colors.subtext);
            text2.setAttribute('font-size', '13');
            text2.textContent = state.desc;
            g.appendChild(text2);
        });

        // Draw arrows
        const drawArrow = (x1: number, y1: number, x2: number, y2: number, label: string) => {
            // Line
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', String(x1));
            line.setAttribute('y1', String(y1));
            line.setAttribute('x2', String(x2));
            line.setAttribute('y2', String(y2));
            line.setAttribute('stroke', colors.arrow);
            line.setAttribute('stroke-width', '2');
            line.setAttribute('marker-end', 'url(#arrowhead)');
            g.appendChild(line);

            // Label
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', String((x1 + x2) / 2));
            text.setAttribute('y', String((y1 + y2) / 2 - 5));
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', colors.subtext);
            text.setAttribute('font-size', '11');
            text.textContent = label;
            g.appendChild(text);
        };

        // Define arrowhead marker
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        marker.setAttribute('id', 'arrowhead');
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
        svg.insertBefore(defs, g);

        // Draw transitions
        drawArrow(width / 2, 180, width / 2, 250, 'Resources allocated');
        drawArrow(width / 2 + 20, 330, 250, 400, 'Exit code 0');
        drawArrow(width / 2 - 20, 330, 450, 400, 'Exit code ≠ 0');
        drawArrow(width / 2 - 100, 140, 150, 400, 'scancel');
        drawArrow(width / 2 + 100, 280, 650, 400, 'scancel');

    }, [isDark]);

    return (
        <div className="my-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">📊</span>
                SLURM Job Lifecycle
            </h4>
            <svg
                ref={svgRef}
                width="100%"
                height="500"
                className="overflow-visible"
                style={{ maxWidth: '100%' }}
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
                Interactive flowchart showing job state transitions in SLURM scheduler
            </p>
        </div>
    );
}
