import React, {
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
    setData: React.Dispatch<PartialCalculatorData>;
    resetData: () => void;
}

interface CalcualatorDataProviderProps {
    children: React.ReactNode;
}

const initialCalcualtorData: Required<CalculatorData> = {
    price: 0,
    dirtyMaterialsPrice: 0,
    clearlyMaterialsPrice: 0,
    days: 0,
};

const CalculatorDataContext = createContext<CalcualatorDataContextValue>({
    data: { ...initialCalcualtorData },
    setData: (_data) => { },
    resetData: () => { },
});

export const useCalculatorData = () => useContext<CalcualatorDataContextValue>(CalculatorDataContext);

export const CalculatorDataProvider = ({ children }: CalcualatorDataProviderProps) => {
    const [data, setData] = useState<CalculatorData>({ ...initialCalcualtorData });

    const handleSetData = useCallback<CalcualatorDataContextValue['setData']>((stateAction) => {
        setData((currentData) => ({ ...currentData, ...stateAction }));
    }, []);

    const resetData = useCallback(() => {
        setData({ ...initialCalcualtorData });
    }, []);

    return (
        <CalculatorDataContext.Provider
            value={{
                data,
                setData: handleSetData,
                resetData,
            }}
        >
            {children}
        </CalculatorDataContext.Provider>
    );
};
