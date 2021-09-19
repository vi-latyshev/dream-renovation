import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

interface DataValueBlockProps {
    label: string;
    data: string;
    classNames?: string;
}

const useStyles = makeStyles(({ breakpoints }) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        width: breakpoints.values.sm,
        fontWeight: 'bold',
        '& > span': {
            textAlign: 'right',
            marginLeft: 35,
        },
    },
}));

export const DataValueBlock = ({ label, data, classNames }: DataValueBlockProps) => {
    const classes = useStyles();

    return (
        <Typography
            color="textSecondary"
            className={clsx(classes.container, classNames)}
        >
            {label}:
            <Typography
                variant="h3"
                component="span"
                display="inline"
                color="textPrimary"
            >
                {data}
            </Typography>
        </Typography>
    );
};
