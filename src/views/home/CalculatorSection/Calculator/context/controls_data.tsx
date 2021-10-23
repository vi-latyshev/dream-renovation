import {
    useState,
    useContext,
    useCallback,
    createContext,
} from 'react';

type ControlsValue = unknown;

type ControlsData = {
    [name: string]: ControlsValue;
};

export interface ControlsDataContextValue {
    values: ControlsData;
    setValues: (name: string, value: ControlsValue) => void;
    resetValues: () => void;
}

interface ControlsDataProviderProps {
    children: React.ReactNode;
}

const initialControlsData = {};

const ControlsDataContext = createContext<ControlsDataContextValue>({
    values: { ...initialControlsData },
    setValues: (_name, _values) => { },
    resetValues: () => { },
});

export const useControlsData = () => useContext<ControlsDataContextValue>(ControlsDataContext);

export const ControlsDataProvider = ({ children }: ControlsDataProviderProps) => {
    const [values, setValues] = useState<ControlsData>(initialControlsData);

    const handleSetValues = useCallback((name: string, value: ControlsValue) => {
        setValues((currValues) => ({
            ...currValues,
            [name]: value,
        }));
    }, []);

    const resetValues = useCallback(() => {
        setValues({ ...initialControlsData });
    }, []);

    return (
        <ControlsDataContext.Provider
            value={{
                values,
                setValues: handleSetValues,
                resetValues,
            }}
        >
            {children}
        </ControlsDataContext.Provider>
    );
};
