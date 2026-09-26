import React, { useEffect, useRef } from 'react';

const GenerativeVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Glass Architectural Geometry Nodes
    const numNodes = 24;
    const nodes = [];
    for (let i = 0; i < numNodes; i++) {
      const angle = (i / numNodes) * Math.PI * 2;
      const radius = 120 + (i % 3) * 35;
      nodes.push({
        baseAngle: angle,
        radius: radius,
        speed: 0.003 + (i % 4) * 0.001,
        yOffset: (i % 5 - 2) * 25,
        size: 4 + (i % 3) * 2,
      });
    }

    let rotAngle = 0;

    const render = () => {
      // Ease mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + (mouse.x - width / 2) * 0.1;
      const centerY = height / 2 + (mouse.y - height / 2) * 0.1;

      rotAngle += 0.005;

      // Draw background ambient glow (Indigo / Soft Teal)
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 220);
      glowGrad.addColorStop(0, 'rgba(91, 92, 226, 0.12)');
      glowGrad.addColorStop(0.6, 'rgba(32, 184, 166, 0.05)');
      glowGrad.addColorStop(1, 'rgba(247, 247, 242, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 240, 0, Math.PI * 2);
      ctx.fill();

      // Compute 3D projected coordinates for structural frame
      const points = [];
      nodes.forEach((node) => {
        const a = node.baseAngle + rotAngle * (node.radius > 140 ? 1 : -1);
        const x3d = Math.cos(a) * node.radius;
        const z3d = Math.sin(a) * node.radius;
        const y3d = node.yOffset + Math.sin(rotAngle * 2 + node.baseAngle) * 15;

        // Perspective projection
        const perspective = 400 / (400 + z3d);
        const px = centerX + x3d * perspective;
        const py = centerY + y3d * perspective;

        points.push({ x: px, y: py, perspective, z: z3d });
      });

      // Draw structural connecting lines (Architectural mesh)
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35 * Math.min(points[i].perspective, points[j].perspective);
            ctx.strokeStyle = `rgba(91, 92, 226, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Glass Polyhedron Central Core
      const coreSize = 75;
      const corePoints = [
        { x: -coreSize, y: -coreSize, z: -coreSize },
        { x: coreSize, y: -coreSize, z: -coreSize },
        { x: coreSize, y: coreSize, z: -coreSize },
        { x: -coreSize, y: coreSize, z: -coreSize },
        { x: 0, y: 0, z: coreSize * 1.4 },
        { x: 0, y: 0, z: -coreSize * 1.4 },
      ];

      const projCore = corePoints.map((p) => {
        // Rotate around Y and X
        const cosY = Math.cos(rotAngle * 0.8);
        const sinY = Math.sin(rotAngle * 0.8);
        const cosX = Math.cos(rotAngle * 0.5);
        const sinX = Math.sin(rotAngle * 0.5);

        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        const pFactor = 350 / (350 + z2);
        return {
          x: centerX + x1 * pFactor,
          y: centerY + y1 * pFactor,
          z: z2,
        };
      });

      // Draw translucent core faces
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.strokeStyle = 'rgba(91, 92, 226, 0.4)';
      ctx.lineWidth = 1.5;

      const faces = [
        [0, 1, 4],
        [1, 2, 4],
        [2, 3, 4],
        [3, 0, 4],
        [0, 1, 5],
        [1, 2, 5],
        [2, 3, 5],
        [3, 0, 5],
      ];

      faces.forEach((face) => {
        ctx.beginPath();
        ctx.moveTo(projCore[face[0]].x, projCore[face[0]].y);
        ctx.lineTo(projCore[face[1]].x, projCore[face[1]].y);
        ctx.lineTo(projCore[face[2]].x, projCore[face[2]].y);
        ctx.closePath();

        const grad = ctx.createLinearGradient(
          projCore[face[0]].x,
          projCore[face[0]].y,
          projCore[face[2]].x,
          projCore[face[2]].y
        );
        grad.addColorStop(0, 'rgba(217, 228, 255, 0.4)');
        grad.addColorStop(0.5, 'rgba(91, 92, 226, 0.08)');
        grad.addColorStop(1, 'rgba(32, 184, 166, 0.25)');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.stroke();
      });

      // Draw Node points
      points.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, (idx % 2 === 0 ? 4 : 3) * p.perspective, 0, Math.PI * 2);
        ctx.fillStyle = idx % 3 === 0 ? '#20B8A6' : '#5B5CE2';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="generative-visual-wrapper">
      <canvas ref={canvasRef} className="generative-canvas" />
    </div>
  );
};

export default GenerativeVisual;
