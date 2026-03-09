import { useState, useCallback, useRef, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

interface ScrambleTextProps {
    text: string;
    className?: string;
    revealSpeed?: number;
}

export default function ScrambleText({
    text,
    className = '',
    revealSpeed = 50,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const revealedRef = useRef(text.length);

    const scramble = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        revealedRef.current = 0;

        intervalRef.current = setInterval(() => {
            const revealed = revealedRef.current;
            const result = text
                .split('')
                .map((char, i) => {
                    if (char === ' ') return ' ';
                    if (i < revealed) return text[i];
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join('');

            setDisplayText(result);
            revealedRef.current += 1;

            if (revealedRef.current > text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayText(text);
            }
        }, revealSpeed);
    }, [text, revealSpeed]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <span
            className={`cursor-default ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
}
