import {
    useState,
    useContext,
    useCallback,
    createContext,
} from 'react';

export interface CalculatorData {
    price: number;
    dirtyMaterialsPrice: number;
    clearlyMaterialsPrice: number;
    days: number;
}

export type PartialCalculatorData = Partial<CalculatorData>;

interface CalcualatorDataContextValue {
    data: CalculatorData;
    setData: (data: PartialCalculatorData) => void;
}

interface CalcualatorDataProviderProps {
    children: React.ReactNode;
}

const initialCalcualtorData: Required<CalculatorData> = {
    price: 18000,
    dirtyMaterialsPrice: 6000,
    clearlyMaterialsPrice: 7000,
    days: 2.5 * 30,
};

const CalculatorDataContext = createContext<CalcualatorDataContextValue>({
    data: initialCalcualtorData,
    setData: (_data) => { },
});

export const useCalculatorData = () => useContext<CalcualatorDataContextValue>(CalculatorDataContext);

export const CalculatorDataProvider = ({ children }: CalcualatorDataProviderProps) => {
    const [data, setData] = useState<CalculatorData>(initialCalcualtorData);

    const handleSetData = useCallback((newData: PartialCalculatorData) => {
        setData((currentData) => ({ ...currentData, ...newData }));
    }, []);

    return (
        <CalculatorDataContext.Provider
            value={{
                data,
                setData: handleSetData,
            }}
        >
            {children}
        </CalculatorDataContext.Provider>
    );
};
