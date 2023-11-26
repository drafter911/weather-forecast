import React, { useEffect, useState } from 'react';

export const useCountDown = (
    initialValue: number,
    interval: number = 1000
): [number, React.Dispatch<React.SetStateAction<number>>] => {
    const [count, setCount] = useState<number>(initialValue < 0 ? 0 : initialValue);

    const decrement = (): void => setCount((prevCount: number) => (prevCount > 0 ? prevCount - 1 : 0));

    useEffect(() => {
        if (count <= 0) return;

        const timerId: ReturnType<typeof setTimeout> = setTimeout(decrement, interval);

        return () => clearTimeout(timerId);
    }, [count]);

    return [count, setCount];
};
