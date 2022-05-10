import { Fragment } from 'react';

import type { FieldHumanType } from 'lib/api/routes/forms/constants';
import type { DataValues } from 'lib/superstruct/resolver/types';

interface FieldsInputsMailProps {
    humanNames: FieldHumanType;
    humanValues: FieldHumanType;
    values: DataValues;
}

export const FieldsInputsMail = ({
    values,
    humanNames,
    humanValues,
}: FieldsInputsMailProps) => (
    <>
        {Object.keys(values).map((valueName) => {
            const humanFieldName = humanNames[valueName] ?? valueName;
            const filedValue = values[valueName];
            const humanFieldValue = humanValues[filedValue] ?? filedValue;

            return (
                <Fragment key={valueName}>
                    <b>{humanFieldName}</b>: {humanFieldValue === '' ? '-' : humanFieldValue}
                    <br />
                </Fragment>
            );
        })}
    </>
);
