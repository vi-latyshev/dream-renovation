import { useCallback, useRef, useState } from 'react';

type HandleChangeValueType<T> = (value: React.SetStateAction<T>, forceUpdate?: boolean) => void;

export const useThrottleHandler = <T>(defaultValue: T, ms: number = 200): [T, HandleChangeValueType<T>] => {
    const [value, setValue] = useState<T>(defaultValue);
    const lastExecuted = useRef<number>(Date.now());
    const timerId = useRef<ReturnType<typeof setTimeout>>();

    const handleChangeValue = useCallback<HandleChangeValueType<T>>((newValue, forceUpdate) => {
        if (timerId.current !== undefined) {
            clearTimeout(timerId.current);
        }
        if (forceUpdate) {
            lastExecuted.current = Date.now();
            setValue(newValue);

            return;
        }
        const isTimeExceeded = Date.now() >= lastExecuted.current + ms;

        if (isTimeExceeded) {
            lastExecuted.current = Date.now();
            setValue(newValue);

            return;
        }
        // @TODO fix change value only with click (not with delay)
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
