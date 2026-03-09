import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uProgress;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    float aspectRatio = uResolution.x / uResolution.y;
    float scale = 30.0;
    vec2 gridCount = vec2(scale * aspectRatio, scale);
    vec2 gridUv = floor(vUv * gridCount) / gridCount;
    
    float h = hash(gridUv);
    
    // Threshold drops as we scroll down
    float threshold = uProgress * 1.35; 
    
    // Bottom-to-Top pixel reveal
    float alpha = step(threshold, (1.0 - vUv.y) + h * 0.3);
    
    // Color exactly matching #000000 (Pure Black)
    vec3 color = vec3(0.0, 0.0, 0.0); 
    
    gl_FragColor = vec4(color, alpha);
  }
`;

interface PixelRevealTransitionProps {
    triggerRef?: React.RefObject<HTMLElement | null>;
}

export default function PixelRevealTransition({ triggerRef }: PixelRevealTransitionProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uProgress: { value: 1 }, // Start at 1 (Fully Invisible)
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            },
            transparent: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            material.uniforms.uResolution.value.set(width, height);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        if (triggerRef?.current) {
            const mainTl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            });

            // ── 100% SCROLL DISSOLVE ──

            mainTl.to(material.uniforms.uProgress, {
                value: 0, // Goes to 0 (Fully Opaque)
                ease: "none",
                duration: 1 // Spans 100% of the scroll timeline
            }, 0);

            mainTl.fromTo("#page-content",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, ease: "none", duration: 0.4 },
                0.6 // Starts exactly as the pixels cover the Hero
            );
        }

        const animate = () => {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            material.dispose();
            geometry.dispose();
        };
    }, [triggerRef]);

    return (
        <div className="absolute inset-0 z-[20] pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}