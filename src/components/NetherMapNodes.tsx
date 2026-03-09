import { motion } from 'motion/react';

interface MapNode {
  id: string;
  title: string;
  day: string;
  desc: string;
  type: 'WORKSHOP' | 'TALK' | 'HACKATHON' | 'FINALE';
}

const NODES: MapNode[] = [
  { id: 'N01', title: 'The Ignition', day: 'DAY 1', desc: 'Opening ceremony and first challenge drop.', type: 'TALK' },
  { id: 'N02', title: 'Code Forge', day: 'DAY 2', desc: 'Workshop sessions on bleeding-edge tech.', type: 'WORKSHOP' },
  { id: 'N03', title: 'The Arena', day: 'DAY 3', desc: '24-hour hackathon in the nether.', type: 'HACKATHON' },
  { id: 'N04', title: 'The Invasion', day: 'DAY 4', desc: 'Grand finale with prizes and demos.', type: 'FINALE' },
];

const typeColors: Record<string, string> = {
  TALK: '#ff4d00',
  WORKSHOP: '#ff8c00',
  HACKATHON: '#ff2200',
  FINALE: '#ff0044',
};

export default function NetherMapNodes() {
  return (
    <section className="relative py-32 px-6 md:px-[60px] max-w-[1200px] mx-auto">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff4d00]/30 to-transparent" />

      <div className="flex flex-col gap-32">
        {NODES.map((node, i) => {
          const isLeft = i % 2 === 0;
          const color = typeColors[node.type] || '#ff4d00';

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 border-2"
                  style={{ borderColor: color, backgroundColor: `${color}33` }}
                />
              </div>

              <div
                className="relative w-full md:w-[45%] p-8 border bg-black/60 backdrop-blur-sm"
                style={{ borderColor: `${color}33` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-[10px] px-2 py-1 uppercase tracking-widest"
                    style={{ color, backgroundColor: `${color}15` }}
                  >
                    {node.type}
                  </span>
                  <span className="font-mono text-[10px] text-white/20 tracking-[0.2em]">
                    {node.id}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-2">
                  {node.title}
                </h3>
                <p className="text-sm text-white/40 font-mono mb-6">{node.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-black italic tracking-tighter" style={{ color }}>
                    {node.day}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, j) => (
                      <div
                        key={j}
                        className="w-2 h-2"
                        style={{
                          backgroundColor: j <= i ? color : 'rgba(255,255,255,0.05)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
