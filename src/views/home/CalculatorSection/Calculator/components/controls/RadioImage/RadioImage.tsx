import Image from 'next/image';
import {
    Paper,
    Radio as MuiRadio,
    FormControlLabel,
    makeStyles,
    useRadioGroup,
} from '@material-ui/core';
import clsx from 'clsx';

import type { FormControlLabelProps } from '@material-ui/core';

interface RadioImageProps extends Omit<FormControlLabelProps, 'control' | 'checked'> {
    imgSrc: StaticImageData;
    imgAlt: string;
}

const useStyles = makeStyles(({ palette }) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 25,
        paddingBottom: 15,
        textAlign: 'center',
        '& > *:nth-child(1)': {
            marginBottom: 15,
        },
    },
    checked: {
        borderColor: palette.primary.main,
    },
    controlLabel: {
        margin: 0,
    },
    radio: {
        display: 'none',
    },
}));

export const RadioImage = ({
    imgSrc,
    imgAlt,
    label,
    ...props
}: RadioImageProps) => {
    const classes = useStyles();
    const radioGroup = useRadioGroup();

    const isChecked = radioGroup?.value === props.value;

    return (
        <Paper variant="outlined" className={clsx({ [classes.checked]: isChecked })}>
            <FormControlLabel
                checked={isChecked}
                control={(
                    <MuiRadio
                        color="primary"
                        className={classes.radio}
                    />
                )}
                label={(
                    <div className={classes.container}>
                        <Image
                            width={196}
                            height={169}
                            layout="fixed"
                            placeholder="blur"
                            src={imgSrc}
                            alt={imgAlt}
                        />
                        {label}
                    </div>
                )}
                className={classes.controlLabel}
                {...props}
            />
        </Paper>
    );
};
