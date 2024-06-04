import React, { useEffect, useRef } from 'react';
import { Engine, Render, Bodies, World, Body, Events, Runner } from 'matter-js';
import './ProjectBubbleTank.css';

interface ProjectBubbleTankProps {
  projects: { id: number; title: string; description: string; }[];
  onBubbleClick: (project: { title: string; description: string }) => void;
}

const ProjectBubbleTank: React.FC<ProjectBubbleTankProps> = ({ projects, onBubbleClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const engine = Engine.create();
    engine.gravity.y = 0; // Disable gravity

    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    const walls = [
      Bodies.rectangle(containerRef.current.clientWidth / 2, 0, containerRef.current.clientWidth, 10, { isStatic: true }),
      Bodies.rectangle(containerRef.current.clientWidth / 2, containerRef.current.clientHeight, containerRef.current.clientWidth, 10, { isStatic: true }),
      Bodies.rectangle(0, containerRef.current.clientHeight / 2, 10, containerRef.current.clientHeight, { isStatic: true }),
      Bodies.rectangle(containerRef.current.clientWidth, containerRef.current.clientHeight / 2, 10, containerRef.current.clientHeight, { isStatic: true }),
    ];

    const bubbles = projects.map((project, index) => {
      const x = Math.random() * (containerRef.current!.clientWidth - 100) + 50;
      const y = Math.random() * (containerRef.current!.clientHeight - 100) + 50;
      const bubble = Bodies.circle(x, y, 50, {
        restitution: 1, // Perfectly elastic collisions
        frictionAir: 0, // Disable air friction (damping)
        friction: 0, // No friction
        frictionStatic: 0, // No static friction
        render: {
          fillStyle: `transparent`,
          strokeStyle: 'transparent',
        }
      });
      bubble.label = project.title;
      Body.setVelocity(bubble, {
        x: (Math.random() - 0.5) * 1.25, // Slower initial velocity
        y: (Math.random() - 0.5) * 1.25, // Slower initial velocity
      });
      return bubble;
    });

    World.add(engine.world, [...walls, ...bubbles]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    Events.on(engine, 'afterUpdate', () => {
      bubbles.forEach((bubble, index) => {
        const element = bubblesRef.current[index];
        if (element) {
          element.style.transform = `translate(${bubble.position.x - 50}px, ${bubble.position.y - 50}px)`;
        }

        // Reapply velocity if it drops below a threshold
        const speed = Math.sqrt(bubble.velocity.x ** 2 + bubble.velocity.y ** 2);
        if (speed < 0.7) { // Lower speed threshold
          Body.setVelocity(bubble, {
            x: (Math.random() - 0.5) * 1.25, // Slower reapplied velocity
            y: (Math.random() - 0.5) * 1.25, // Slower reapplied velocity
          });
        }
      });
    });

    // Synchronize the rendering with Matter.js
    const syncRender = () => {
      render.bounds.min.x = 0;
      render.bounds.min.y = 0;
      render.bounds.max.x = containerRef.current!.clientWidth;
      render.bounds.max.y = containerRef.current!.clientHeight;
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: containerRef.current!.clientWidth, y: containerRef.current!.clientHeight }
      });
      requestAnimationFrame(syncRender);
    };

    requestAnimationFrame(syncRender);

    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      (render.canvas as HTMLCanvasElement).remove(); // Type assertion
      render.canvas = null as any; // Type assertion
      render.context = null as any; // Type assertion
      render.textures = {};
    };
  }, [projects]);

  return (
    <div className="floating-icons-container" ref={containerRef}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => bubblesRef.current[index] = el!}
          className="floating-icon"
          onClick={() => onBubbleClick(project)}
        >
          <div className="icon-content">{project.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectBubbleTank;
