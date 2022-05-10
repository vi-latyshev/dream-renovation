import { makeStyles, Typography } from '@material-ui/core';

interface ModalTitleProps {
    isError?: boolean;
    children: string;
}

const useStyles = makeStyles(({ spacing }) => ({
    title: {
        marginBottom: spacing(3),
    },
}));

export const ModalTitle = ({ isError, children }: ModalTitleProps) => {
    const classes = useStyles();

    return (
        <Typography
            variant="h1"
            color={isError ? 'error' : 'primary'}
            className={classes.title}
        >
            {children}
        </Typography>
    );
};
