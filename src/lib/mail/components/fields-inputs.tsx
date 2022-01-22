import { Fragment } from 'react';

interface FieldsInputsMailProps {
    humanNames: Record<string, string>;
    values: Record<string, unknown>;
}

export const FieldsInputsMail = ({ humanNames: fieldsHumanName, values }: FieldsInputsMailProps) => (
    <>
        {Object.keys(values).map((valueName) => {
            const fieldName = fieldsHumanName[valueName] ?? valueName;
            const fieldValue = values[valueName];

            return (
                <Fragment key={valueName}>
                    <b>{fieldName}</b>: {fieldValue}
                    <br />
                </Fragment>
            );
        })}
    </>
);
