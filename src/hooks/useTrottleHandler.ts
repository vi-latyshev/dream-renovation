import { useCallback, useRef, useState } from 'react';

type HandleChangeValueType<T> = (
    // @TODO https://github.com/microsoft/TypeScript/issues/37663
    value: T extends Function ? never : React.SetStateAction<T>,
    forceUpdate?: boolean
) => void;

export const useThrottleHandler = <T>(defaultValue: T, ms: number = 200): [T, HandleChangeValueType<T>] => {
    const [{ value }, setValue] = useState<{ value: T; }>({ value: defaultValue });
    const lastExecuted = useRef<number>(Date.now());
    const timerId = useRef<ReturnType<typeof setTimeout>>();

    const handleChangeValue = useCallback<HandleChangeValueType<T>>((newState, forceUpdate) => {
        if (timerId.current !== undefined) {
            clearTimeout(timerId.current);
        }
        if (forceUpdate || Date.now() >= lastExecuted.current + ms) {
            lastExecuted.current = Date.now();
            setValue(({ value: currValue }) => {
                if (typeof newState === 'function') {
                    return { value: newState(currValue) };
                }

                return { value: newState };
            });

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
