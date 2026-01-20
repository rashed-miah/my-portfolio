import React, { useEffect, useRef, useState } from 'react';

const MathCodingBG = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mathematical symbols and code snippets
  const mathSymbols = [
    '∫', '∑', '∏', '∆', '∇', '∞', '∂', '√', '≈', '≡', '≠', '≤', '≥', '∈', '∉', '∀', '∃', '∧', '∨', '¬',
    'α', 'β', 'γ', 'δ', 'ε', 'θ', 'λ', 'μ', 'π', 'σ', 'φ', 'ψ', 'ω', 'Ω', 'Φ', 'Ψ', 'Θ', 'Λ'
  ];

  const codeSnippets = [
    'function', 'const', 'let', 'var', 'class', 'import', 'export', 'return', 'if', 'else', 'for', 'while',
    'map', 'filter', 'reduce', 'forEach', 'async', 'await', 'promise', 'callback', 'array', 'object',
    '{ }', '[ ]', '( )', '=>', '&&', '||', '==', '===', '!=', '!==', '++', '--', '+=', '-=', '*=', '/=',
    'true', 'false', 'null', 'undefined', 'typeof', 'instanceof', 'new', 'this', 'super', 'extends'
  ];

  const equations = [
    'E = mc²', 'f(x) = x²', 'y = mx + b', 'a² + b² = c²', 'sin²θ + cos²θ = 1', 'e^(iπ) + 1 = 0',
    'F = ma', 'PV = nRT', 'Δx·Δp ≥ ℏ/2', 'S = k log W', 'c = λf', 'F = qvB', 'E = hf'
  ];

  class Particle {
    constructor(canvas) {
      this.canvas = canvas;
      this.reset();
      this.age = Math.random() * 100;
      this.maxAge = 200 + Math.random() * 300;
      this.hoverRadius = 120;
      this.originalSpeed = this.speed;
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.speed = Math.random() * 0.5 + 0.2;
      this.size = Math.random() * 2 + 0.8; // Smaller base size
      this.opacity = Math.random() * 0.3 + 0.2; // More subtle opacity
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.008; // Slower rotation
      
      // Random content type
      const contentType = Math.random();
      if (contentType < 0.4) {
        this.content = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
        this.color = '#64FFDA'; // Cyan for math
        this.type = 'math';
      } else if (contentType < 0.8) {
        this.content = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.color = '#BB86FC'; // Purple for code
        this.type = 'code';
      } else {
        this.content = equations[Math.floor(Math.random() * equations.length)];
        this.color = '#03DAC6'; // Teal for equations
        this.type = 'equation';
      }
    }

    update(mouse, isHovering) {
      this.age++;
      
      // Mouse interaction
      if (isHovering) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.hoverRadius) {
          const force = (this.hoverRadius - distance) / this.hoverRadius;
          const angle = Math.atan2(dy, dx);
          
          // Attraction effect
          this.vx += Math.cos(angle) * force * 0.02;
          this.vy += Math.sin(angle) * force * 0.02;
          
          // Enhance properties when near mouse (smaller max size)
          this.size = Math.min(this.size * 1.02, 4); // Smaller max size
          this.opacity = Math.min(this.opacity * 1.05, 0.8);
          this.rotationSpeed *= 1.05; // Slower spin acceleration
        }
      } else {
        // Return to normal state
        this.size = Math.max(this.size * 0.99, 0.8);
        this.opacity = Math.max(this.opacity * 0.995, 0.2);
        this.rotationSpeed *= 0.98;
      }
      
      // Apply velocity
      this.x += this.vx;
      this.y += this.vy;
      
      // Add some randomness
      this.vx += (Math.random() - 0.5) * 0.01;
      this.vy += (Math.random() - 0.5) * 0.01;
      
      // Damping
      this.vx *= 0.999;
      this.vy *= 0.999;
      
      // Rotation
      this.rotation += this.rotationSpeed;
      
      // Keep particles within canvas bounds
      if (this.x < 0) this.x = this.canvas.width;
      if (this.x > this.canvas.width) this.x = 0;
      if (this.y < 0) this.y = this.canvas.height;
      if (this.y > this.canvas.height) this.y = 0;
      
      // Reset if too old
      if (this.age > this.maxAge) {
        this.reset();
        this.age = 0;
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      
      // Subtle glow effect
      ctx.shadowColor = this.color;
      ctx.shadowBlur = this.size * 1.5;
      
      // Draw content
      ctx.fillStyle = this.color;
      ctx.font = `${this.size * 3}px 'Fira Code', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.content, 0, 0);
      
      ctx.restore();
    }
  }

  // Initialize particles
  const initParticles = (canvas) => {
    const particles = [];
    const particleCount = 60; // Fewer particles for background effect
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }
    
    return particles;
  };

  // Animation loop
  const animate = (canvas, ctx) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particlesRef.current.forEach(particle => {
      particle.update(mouseRef.current, isHovering);
      particle.draw(ctx);
    });
    
    // Draw connections between nearby particles
    if (isHovering) {
      drawConnections(ctx);
    }
    
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
  };

  // Draw connections between nearby particles
  const drawConnections = (ctx) => {
    const maxDistance = 100;
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (maxDistance - distance) / maxDistance * 0.2; // More subtle connections
          
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#64FFDA';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  };

  // Mouse move handler
  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  // Initialize canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize particles
    particlesRef.current = initParticles(canvas);
    
    // Start animation
    animate(canvas, ctx);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Canvas for particle effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ cursor: 'none' }}
      />
    </div>
  );
};

export default MathCodingBG;