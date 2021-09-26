import Image from 'next/image';
import {
    Grid,
    Paper,
    Radio as MuiRadio,
    FormControlLabel,
    makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

import { useCheckedRadio } from '../../../hooks/useCheckedRadio';

import type { FormControlLabelProps } from '@material-ui/core';

interface RadioImageProps extends Omit<FormControlLabelProps, 'control'> {
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
    checked,
    ...props
}: RadioImageProps) => {
    const classes = useStyles();

    const [isChecked, handleChange] = useCheckedRadio();

    return (
        <Grid item>
            <Paper variant="outlined" className={clsx({ [classes.checked]: isChecked })}>
                <FormControlLabel
                    checked={checked}
                    onChange={handleChange}
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
        </Grid>
    );
};
