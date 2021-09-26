import { useCallback, useEffect, useState } from 'react';

export const useCheckedRadio = (checked?: boolean) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => setIsChecked(checked), [checked]);

    const handleChange = useCallback((_event: React.ChangeEvent<{}>, targetChecked: boolean) => {
        setIsChecked(targetChecked);
    }, []);

    return [isChecked, handleChange] as [typeof isChecked, typeof handleChange];
};
