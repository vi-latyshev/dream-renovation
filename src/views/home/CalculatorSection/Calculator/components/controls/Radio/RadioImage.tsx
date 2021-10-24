import Image from 'next/image';
import { makeStyles } from '@material-ui/core';

import { RadioBase } from './RadioBase';

import type { RadioBaseProps } from './RadioBase';

interface RadioImageProps extends RadioBaseProps {
    imgSrc: StaticImageData;
    imgAlt: string;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 25,
        paddingBottom: 15,
        textAlign: 'center',
        '& > *:first-child': {
            marginBottom: 15,
        },
    },
    controlLabel: {
        margin: 0,
    },
    radio: {
        display: 'none',
    },
});

export const RadioImage = ({
    imgSrc,
    imgAlt,
    label,
    ...props
}: RadioImageProps) => {
    const classes = useStyles();

    return (
        <RadioBase
            radioClassName={classes.radio}
            className={classes.controlLabel}
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
            {...props}
        />
    );
};
