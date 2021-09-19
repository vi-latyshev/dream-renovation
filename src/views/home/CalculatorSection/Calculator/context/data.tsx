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
    time: number;
}

interface CalcualatorDataContextValue extends CalculatorData {
    setData: (data: Partial<CalculatorData>) => void;
}

interface CalcualatorDataProviderProps {
    children: React.ReactNode;
}

const initialCalcualtorData: Required<CalculatorData> = {
    price: 18000,
    dirtyMaterialsPrice: 6000,
    clearlyMaterialsPrice: 7000,
    time: 0,
};

const CalculatorDataContext = createContext<CalcualatorDataContextValue>({
    ...initialCalcualtorData,
    setData: (_data) => { },
});

export const useCalculatorData = () => useContext<CalcualatorDataContextValue>(CalculatorDataContext);

export const CalculatorDataProvider = ({ children }: CalcualatorDataProviderProps) => {
    const [calculatorData, setCalculatorData] = useState<CalculatorData>(initialCalcualtorData);

    const handleCalculatorData = useCallback((newData: Partial<CalculatorData>) => {
        setCalculatorData((data) => ({ ...data, ...newData }));
    }, []);

    return (
        <CalculatorDataContext.Provider
            value={{
                ...calculatorData,
                setData: handleCalculatorData,
            }}
        >
            {children}
        </CalculatorDataContext.Provider>
    );
};
