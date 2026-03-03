import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PhantomProps {
    count?: number;
}

export default function MinecraftPhantoms({ count = 3 }: PhantomProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 5);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // --- Materials ---
        const phantomDeepBlue = new THREE.MeshStandardMaterial({ color: 0x3E4557 });
        const phantomLightBlue = new THREE.MeshStandardMaterial({ color: 0x4A536B });
        const phantomBoneColor = new THREE.MeshStandardMaterial({ color: 0xD2B48C }); // Beige for ribs/tail
        const phantomEyeMaterial = new THREE.MeshStandardMaterial({
            color: 0x55FF55,
            emissive: 0x55FF55,
            emissiveIntensity: 5
        });

        // --- Phantom Creation Helper ---
        const createPhantom = () => {
            const group = new THREE.Group();

            // 1. Body (Main Segment)
            const bodyGeo = new THREE.BoxGeometry(1.6, 0.4, 0.8);
            const body = new THREE.Mesh(bodyGeo, phantomLightBlue);
            group.add(body);

            // 2. Head
            const headGeo = new THREE.BoxGeometry(0.6, 0.5, 0.6);
            const head = new THREE.Mesh(headGeo, phantomDeepBlue);
            head.position.set(1.1, 0, 0);
            body.add(head);

            // Eyes
            const eyeGeo = new THREE.BoxGeometry(0.15, 0.15, 0.05);
            const leftEye = new THREE.Mesh(eyeGeo, phantomEyeMaterial);
            leftEye.position.set(0.3, 0.1, 0.2);
            head.add(leftEye);

            const rightEye = new THREE.Mesh(eyeGeo, phantomEyeMaterial);
            rightEye.position.set(0.3, 0.1, -0.2);
            head.add(rightEye);

            // Add Eye Glow Light
            const eyeLight = new THREE.PointLight(0x55FF55, 10, 5);
            eyeLight.position.set(0.4, 0.1, 0);
            head.add(eyeLight);

            // 3. Tail (Bone/Segmented)
            const tailGeo = new THREE.BoxGeometry(0.8, 0.2, 0.2);
            const tail = new THREE.Mesh(tailGeo, phantomBoneColor);
            tail.position.set(-1.2, 0, 0);
            body.add(tail);

            // 4. Wings (2-part articulation)
            const createWing = (isRight: boolean) => {
                const wingGroup = new THREE.Group();
                const sign = isRight ? 1 : -1;

                // Inner Wing (Segment 1)
                const innerGeo = new THREE.BoxGeometry(0.8, 0.1, 1.2);
                const innerWing = new THREE.Mesh(innerGeo, phantomDeepBlue);
                innerWing.position.set(0, 0, 0.6 * sign);
                wingGroup.add(innerWing);

                // Bone detail on wing
                const ribGeo = new THREE.BoxGeometry(0.1, 0.15, 1.25);
                const rib = new THREE.Mesh(ribGeo, phantomBoneColor);
                innerWing.add(rib);

                // Outer Wing (Segment 2)
                const outerGroup = new THREE.Group();
                outerGroup.position.set(0, 0, 1.2 * sign);
                innerWing.add(outerGroup);

                const outerGeo = new THREE.BoxGeometry(1.2, 0.1, 1.4);
                const outerWing = new THREE.Mesh(outerGeo, phantomDeepBlue);
                outerWing.position.set(0, 0, 0.7 * sign);
                outerGroup.add(outerWing);

                return { wingGroup, outerGroup };
            };

            const leftWingData = createWing(false);
            const rightWingData = createWing(true);

            body.add(leftWingData.wingGroup);
            body.add(rightWingData.wingGroup);

            return { group, leftWing: leftWingData, rightWing: rightWingData };
        };

        interface PhantomObject {
            group: THREE.Group;
            leftWing: { wingGroup: THREE.Group; outerGroup: THREE.Group };
            rightWing: { wingGroup: THREE.Group; outerGroup: THREE.Group };
            speed: number;
            offset: number;
            diveForce: number;
        }

        const phantoms: PhantomObject[] = [];
        for (let i = 0; i < count; i++) {
            const data = createPhantom();
            const phantom: PhantomObject = {
                ...data,
                speed: 0.05 + Math.random() * 0.1,
                offset: Math.random() * Math.PI * 2,
                diveForce: 2 + Math.random() * 3
            };

            phantom.group.position.set(
                (Math.random() - 0.5) * 40 - 20,
                (Math.random() - 0.5) * 15,
                -20 - Math.random() * 10
            );
            phantom.group.rotation.y = Math.PI / 2;

            scene.add(phantom.group);
            phantoms.push(phantom);
        }

        camera.position.z = 15;

        // --- Animation Loop ---
        let frame = 0;
        const animate = () => {
            frame += 0.05;

            phantoms.forEach((p) => {
                // 1. Wing Flapping Animation
                const flapSpeed = frame * 1.5 + p.offset;
                const innerFlap = Math.sin(flapSpeed) * 0.4;
                const outerFlap = Math.sin(flapSpeed - 0.5) * 0.6;

                p.leftWing.wingGroup.rotation.x = innerFlap;
                p.leftWing.outerGroup.rotation.x = outerFlap;

                p.rightWing.wingGroup.rotation.x = -innerFlap;
                p.rightWing.outerGroup.rotation.x = -outerFlap;

                // 2. Flight Movement
                p.group.position.x += p.speed;
                const verticalBob = Math.sin(frame * 0.5 + p.offset);
                p.group.position.y += verticalBob * 0.05; // Slightly more bobbing

                // Rotation based on movement (Pitch & Bank)
                p.group.rotation.x = -verticalBob * 0.4; // Pitch up/down when diving
                p.group.rotation.z = Math.sin(flapSpeed) * 0.15; // More dynamic bank logic

                // Point somewhat towards movement
                p.group.rotation.y = Math.PI / 2 + Math.cos(frame * 0.5 + p.offset) * 0.2;

                // Reset loop
                if (p.group.position.x > 30) {
                    p.group.position.x = -40;
                    p.group.position.y = (Math.random() - 0.5) * 15;
                }
            });

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // --- Handle Resize ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- Cleanup ---
        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [count]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-10 pointer-events-none opacity-60"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
