/* Optional lightweight chart helper for future portfolio metrics. */
(function() {
    'use strict';

    function drawPortfolioChart(canvas, values, labels) {
        if (!(canvas instanceof HTMLCanvasElement) || !Array.isArray(values) || values.length === 0) return;

        const context = canvas.getContext('2d');
        const width = canvas.width = canvas.clientWidth * window.devicePixelRatio;
        const height = canvas.height = canvas.clientHeight * window.devicePixelRatio;
        context.scale(window.devicePixelRatio, window.devicePixelRatio);

        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        const padding = 28;
        const maxValue = Math.max(...values, 1);
        const step = (displayWidth - padding * 2) / Math.max(values.length - 1, 1);

        context.clearRect(0, 0, displayWidth, displayHeight);
        context.strokeStyle = 'rgba(168, 109, 81, 0.18)';
        context.lineWidth = 1;
        for (let line = 0; line < 4; line += 1) {
            const y = padding + ((displayHeight - padding * 2) / 3) * line;
            context.beginPath();
            context.moveTo(padding, y);
            context.lineTo(displayWidth - padding, y);
            context.stroke();
        }

        const points = values.map((value, index) => ({
            x: padding + step * index,
            y: displayHeight - padding - ((value / maxValue) * (displayHeight - padding * 2))
        }));

        const gradient = context.createLinearGradient(0, 0, displayWidth, 0);
        gradient.addColorStop(0, '#c58c68');
        gradient.addColorStop(1, '#8f563f');
        context.strokeStyle = gradient;
        context.lineWidth = 3;
        context.lineJoin = 'round';
        context.beginPath();
        points.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
        context.stroke();

        context.fillStyle = '#9f604a';
        points.forEach((point, index) => {
            context.beginPath();
            context.arc(point.x, point.y, 4, 0, Math.PI * 2);
            context.fill();
            if (labels[index]) {
                context.fillStyle = '#806d61';
                context.font = '12px DM Sans, sans-serif';
                context.textAlign = 'center';
                context.fillText(labels[index], point.x, displayHeight - 8);
                context.fillStyle = '#9f604a';
            }
        });
    }

    window.renderPortfolioChart = drawPortfolioChart;

    document.addEventListener('DOMContentLoaded', () => {
        const chartCanvas = document.getElementById('portfolioProgressChart');
        if (chartCanvas) drawPortfolioChart(chartCanvas, [35, 55, 72, 88], ['Learn', 'Build', 'Design', 'Grow']);
    });
}());