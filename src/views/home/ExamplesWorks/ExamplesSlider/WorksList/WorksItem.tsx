import { makeStyles, Typography } from '@material-ui/core';

interface WorksBlockProps {
    children: string;
}

const useStyles = makeStyles(({ spacing }) => ({
    worksBlock: {
        margin: spacing(2, 3),
    },
}));

export const WorksItem = ({ children }: WorksBlockProps) => {
    const classes = useStyles();

    return (
        <Typography component="li" className={classes.worksBlock}>
            {children}
        </Typography>
    );
};
