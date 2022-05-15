import { useCallback, useRef, useState } from 'react';

type HandleChangeValueType<T> = (
    value: ((prevState: T) => T),
    forceUpdate?: boolean
) => void;

/**
 * Throttle hook
 */
export const useThrottleHandler = <T>(defaultValue: T, ms: number = 200): [T, HandleChangeValueType<T>] => {
    const [value, setValue] = useState<T>(defaultValue);
    const lastExecuted = useRef<number>(Date.now());
    const timerId = useRef<ReturnType<typeof setTimeout>>();

    const handleChangeValue = useCallback<HandleChangeValueType<T>>((newState, forceSet = false) => {
        if (timerId.current !== undefined) {
            clearTimeout(timerId.current);
            timerId.current = undefined;
        }
        if (forceSet === true || Date.now() >= lastExecuted.current + ms) {
            lastExecuted.current = Date.now();
            setValue(newState);

            return;
        }

        const timeoutCallback = () => {
            lastExecuted.current = Date.now();
            timerId.current = undefined;
        };
        timerId.current = setTimeout(timeoutCallback, ms);
    }, []);

    return [
        value,
        handleChangeValue,
    ];
};
