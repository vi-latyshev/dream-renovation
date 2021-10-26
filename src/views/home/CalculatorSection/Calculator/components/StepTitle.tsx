import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

interface StepTitleProps {
    children: string;
}

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 35,
    },
}));

export const StepTitle = ({ children }: StepTitleProps) => {
    const classes = useStyles();

    return (
        <Typography variant="h3" className={classes.title}>
            {children}
        </Typography>
    );
};
