import React, { useEffect, useRef, useState } from 'react';

// Improved Background Component
const MathCodingBG = ({ mousePosition, isActive }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Update mouse position from parent
  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

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
      this.maxAge = 300 + Math.random() * 200;
      this.hoverRadius = 150;
      this.originalSpeed = this.speed;
      this.hoverMultiplier = 1;
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.speed = Math.random() * 0.4 + 0.1;
      this.size = Math.random() * 1.5 + 0.5;
      this.opacity = Math.random() * 0.25 + 0.15;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.005;
      this.baseOpacity = this.opacity;
      this.baseSize = this.size;
      
      // Random content type
      const contentType = Math.random();
      if (contentType < 0.4) {
        this.content = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
        this.color = '#64FFDA';
        this.type = 'math';
      } else if (contentType < 0.8) {
        this.content = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.color = '#BB86FC';
        this.type = 'code';
      } else {
        this.content = equations[Math.floor(Math.random() * equations.length)];
        this.color = '#03DAC6';
        this.type = 'equation';
      }
    }

    update(mouse, isActive) {
      this.age++;
      
      // Enhanced mouse interaction
      if (isActive) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.hoverRadius) {
          const force = (this.hoverRadius - distance) / this.hoverRadius;
          const angle = Math.atan2(dy, dx);
          
          // Smooth attraction with easing
          const easeForce = force * force * (3 - 2 * force); // Smooth step
          this.vx += Math.cos(angle) * easeForce * 0.015;
          this.vy += Math.sin(angle) * easeForce * 0.015;
          
          // Enhanced visual effects
          this.hoverMultiplier = Math.min(this.hoverMultiplier + 0.05, 2);
          this.size = this.baseSize * (1 + easeForce * 0.8);
          this.opacity = Math.min(this.baseOpacity * (1 + easeForce * 1.5), 0.9);
          this.rotationSpeed = this.rotationSpeed * (1 + easeForce * 0.3);
        } else {
          this.hoverMultiplier = Math.max(this.hoverMultiplier - 0.02, 1);
        }
      } else {
        // Smooth return to normal state
        this.hoverMultiplier = Math.max(this.hoverMultiplier - 0.03, 1);
        this.size = this.baseSize * this.hoverMultiplier;
        this.opacity = this.baseOpacity * this.hoverMultiplier;
      }
      
      // Apply velocity with slight drift
      this.x += this.vx;
      this.y += this.vy;
      
      // Add subtle randomness
      this.vx += (Math.random() - 0.5) * 0.008;
      this.vy += (Math.random() - 0.5) * 0.008;
      
      // Gentle damping
      this.vx *= 0.998;
      this.vy *= 0.998;
      
      // Rotation
      this.rotation += this.rotationSpeed;
      
      // Wrap around screen edges
      if (this.x < -50) this.x = this.canvas.width + 50;
      if (this.x > this.canvas.width + 50) this.x = -50;
      if (this.y < -50) this.y = this.canvas.height + 50;
      if (this.y > this.canvas.height + 50) this.y = -50;
      
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
      
      // Enhanced glow effect
      ctx.shadowColor = this.color;
      ctx.shadowBlur = this.size * 2;
      
      // Draw content
      ctx.fillStyle = this.color;
      ctx.font = `${this.size * 4}px 'Fira Code', 'Courier New', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.content, 0, 0);
      
      ctx.restore();
    }
  }

  // Initialize particles
  const initParticles = (canvas) => {
    const particles = [];
    const particleCount = 50;
    
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
      particle.update(mouseRef.current, isActive);
      particle.draw(ctx);
    });
    
    // Draw enhanced connections
    if (isActive) {
      drawConnections(ctx);
    }
    
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
  };

  // Enhanced connection drawing
  const drawConnections = (ctx) => {
    const maxDistance = 120;
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (maxDistance - distance) / maxDistance * 0.3;
          
          // Color gradient based on particle types
          let connectionColor = '#64FFDA';
          if (p1.type === p2.type) {
            connectionColor = p1.color;
          }
          
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = connectionColor;
          ctx.lineWidth = 1;
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
    
    // Set canvas size
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
  }, [isActive]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

// Sample Content Components
const Header = () => (
  <header className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-b border-cyan-500/30">
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-3xl font-bold text-white">Math & Code Studio</h1>
      <p className="text-cyan-400 mt-2">Where mathematics meets programming</p>
    </div>
  </header>
);

const ContentCard = ({ title, children, className = "" }) => (
  <div className={`relative z-10 bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-400/50 ${className}`}>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="text-gray-300">
      {children}
    </div>
  </div>
);

const Sidebar = () => (
  <aside className="relative z-10 bg-gray-900/90 backdrop-blur-sm border-r border-cyan-500/30 p-6 min-h-screen">
    <h2 className="text-2xl font-bold text-white mb-6">Navigation</h2>
    <nav className="space-y-4">
      {['Projects', 'Algorithms', 'Equations', 'Tutorials', 'About'].map((item) => (
        <a
          key={item}
          href="#"
          className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded hover:bg-cyan-500/10"
        >
          {item}
        </a>
      ))}
    </nav>
  </aside>
);

const MainContent = () => (
  <main className="relative z-10 flex-1 p-6 space-y-6">
    <ContentCard title="Featured Project">
      <p className="mb-4">
        A revolutionary algorithm that combines mathematical optimization with machine learning 
        to solve complex computational problems in real-time.
      </p>
      <div className="bg-gray-700/50 rounded p-4 font-mono text-sm">
        <code className="text-green-400">
          function optimize(data) {`{`}<br />
          &nbsp;&nbsp;return neuralNetwork.predict(data);<br />
          {`}`}
        </code>
      </div>
    </ContentCard>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ContentCard title="Mathematical Foundations">
        <p>
          Exploring the deep connections between calculus, linear algebra, and computational 
          complexity theory in modern software development.
        </p>
        <div className="mt-4 text-cyan-400 font-mono">
          ∫f(x)dx = F(x) + C
        </div>
      </ContentCard>

      <ContentCard title="Code Optimization">
        <p>
          Learn advanced techniques for writing efficient algorithms and optimizing performance 
          in various programming languages.
        </p>
        <div className="mt-4 space-y-2">
          <div className="bg-purple-500/20 rounded px-3 py-1 text-sm">Time Complexity: O(n log n)</div>
          <div className="bg-teal-500/20 rounded px-3 py-1 text-sm">Space Complexity: O(1)</div>
        </div>
      </ContentCard>
    </div>

    <ContentCard title="Interactive Demos">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {['Sorting Visualizer', 'Fractal Generator', 'Matrix Calculator'].map((demo) => (
          <button
            key={demo}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-200 transform hover:scale-105"
          >
            {demo}
          </button>
        ))}
      </div>
    </ContentCard>
  </main>
);

// Main Layout Component
const MathCodingLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(false);

  // Global mouse tracking
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsMouseActive(true);
  };

  const handleMouseLeave = () => {
    setIsMouseActive(false);
  };

  return (
    <div 
      className="min-h-screen bg-gray-900 text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background */}
      <MathCodingBG mousePosition={mousePosition} isActive={isMouseActive} />
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
        </div>
        
        {/* Footer */}
        <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-t border-cyan-500/30 p-6 text-center">
          <p className="text-gray-400">
            © 2024 Math & Code Studio. Where algorithms meet artistry.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MathCodingLayout;