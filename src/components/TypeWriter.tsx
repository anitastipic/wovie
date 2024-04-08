import React, { useEffect, useState } from 'react';

type TypewriterProps = {
    text: string;
    speed?: number; // Speed in characters per minute
};

export default function TypeWriter ({ text, speed } : TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const timeBetweenChars = 60000 / speed; // Calculate the delay in milliseconds

        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(timer); // Stop the interval when the entire text is displayed
            }
        }, timeBetweenChars);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [text, speed]); // Dependencies

    return <div>{displayedText}</div>;
};

