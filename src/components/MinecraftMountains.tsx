import React from 'react';
import { motion } from 'motion/react';

const desktopBlocks = [
    { width: '10%', height: '70%' },
    { width: '10%', height: '55%' },
    { width: '10%', height: '40%' },
    { width: '40%', height: '30%' },
    { width: '10%', height: '40%' },
    { width: '10%', height: '60%' },
    { width: '15%', height: '85%' },
];

const mobileBlocks = [
    { width: '25%', height: '60%' },
    { width: '30%', height: '85%' },
    { width: '20%', height: '50%' },
    { width: '25%', height: '75%' },
];

export default function MinecraftMountains() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const blocks = isMobile ? mobileBlocks : desktopBlocks;

    return (
        <div className="absolute bottom-0 left-0 w-full h-[400px] md:h-screen pointer-events-none z-0 flex items-end opacity-90 overflow-hidden">
            {blocks.map((block, i) => (
                <motion.div
                    key={`${isMobile ? 'm' : 'd'}-${i}`}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{ width: block.width, height: block.height }}
                    className="relative bg-[#B6FF00] border-t-8 border-white/5"
                />
            ))}
        </div>
    );
}
