import React, { Dispatch, SetStateAction, useEffect as useEffectOrigin, useState as useStateOrigin } from 'react';
import { act, render, screen } from '@testing-library/react';
import { useCountDown } from '../useCountDown';

const testId = 'count-down-test-component';

const TestComponent: React.FC = (): React.JSX.Element => {
    const [count] = useCountDown(10, 1000);

    return <div data-testid='count-down-test-component'>{count} seconds</div>;
};

const getCountValue = (): number => Number(screen.getByTestId(testId).textContent!);

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
    useEffect: jest.fn()
}));
describe('src/shared/hooks/useCountDown', () => {
    const setState: jest.Mock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();

        const useState = useStateOrigin as jest.Mock<[number, Dispatch<SetStateAction<number>>]>;
        useState.mockImplementation((init) => [init, setState]);

        const useEffect = useEffectOrigin as jest.Mock<void>;
        useEffect.mockImplementation((callback) => callback());
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should return a count and a setCount function', () => {
        const [count, setCount] = useCountDown(10);
        expect(count).toBe(10);
        expect(typeof setCount).toBe('function');
    });

    it('should decrement the count after the specified interval', () => {
        const { rerender } = render(<TestComponent />);
        const count: number = getCountValue();

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        rerender(<TestComponent />);
        const updatedCount: number = getCountValue();

        expect(updatedCount).toBe(count - 1);
    });

    it('should not decrement the count after the interval if the count is 0', () => {
        const [count] = useCountDown(0, 1000);
        expect(count).toBe(0);
        jest.advanceTimersByTime(1000);
        expect(count).toBe(0);
    });

    it('should set count to 0 if received negative initial value', () => {
        const [count] = useCountDown(-1);
        expect(count).toBe(0);
    });
});
