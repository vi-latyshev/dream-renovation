import { Fragment } from 'react';

import type { FieldHumanType } from 'lib/api/routes/forms/constants';

interface FieldsInputsMailProps {
    humanNames: FieldHumanType;
    humanValues: FieldHumanType;
    values: Record<string, unknown>;
}

export const FieldsInputsMail = ({
    values,
    humanNames,
    humanValues,
}: FieldsInputsMailProps) => (
    <>
        {Object.keys(values).map((valueName) => {
            const fieldName = humanNames[valueName] ?? valueName;
            const fieldValue = humanValues[valueName];

            return (
                <Fragment key={valueName}>
                    <b>{fieldName}</b>: {fieldValue}
                    <br />
                </Fragment>
            );
        })}
    </>
);
