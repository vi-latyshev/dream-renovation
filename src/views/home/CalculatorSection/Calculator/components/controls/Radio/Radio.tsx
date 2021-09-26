import {
    Radio as MuiRadio,
    FormControlLabel,
    makeStyles,
} from '@material-ui/core';

import type { FormControlLabelProps } from '@material-ui/core';

interface RadioProps extends Omit<FormControlLabelProps, 'control'> { }

const useStylesLabel = makeStyles(({ palette }) => ({
    root: {
        margin: 0,
        paddingRight: 9,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: palette.action.disabled,
        borderRadius: 5,
        minWidth: 292,
        backgroundColor: palette.common.white,
    },
    label: {
        marginLeft: 20,
        fontSize: '1.125rem',
    },
}));

const useStylesRadio = makeStyles(({ palette }) => ({
    root: {
        color: palette.action.disabled,
        padding: 10,
        margin: '5px 0',
    },
}));

export const Radio = (props: RadioProps) => {
    const classesLabel = useStylesLabel();
    const classesRadio = useStylesRadio();

    return (
        <FormControlLabel
            control={(
                <MuiRadio
                    color="primary"
                    classes={classesRadio}
                />
            )}
            classes={classesLabel}
            {...props}
        />
    );
};
