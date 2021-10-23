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
    setData: React.Dispatch<PartialCalculatorData | ((prevState: CalculatorData) => PartialCalculatorData)>;
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
});

export const useCalculatorData = () => useContext<CalcualatorDataContextValue>(CalculatorDataContext);

export const CalculatorDataProvider = ({ children }: CalcualatorDataProviderProps) => {
    const [data, setData] = useState<CalculatorData>({ ...initialCalcualtorData });

    const handleSetData = useCallback<CalcualatorDataContextValue['setData']>((stateAction) => {
        if (typeof stateAction !== 'function') {
            setData((currentData) => ({ ...currentData, ...stateAction }));

            return;
        }
        setData((currentData) => ({
            ...currentData,
            ...stateAction(currentData),
        }));
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
