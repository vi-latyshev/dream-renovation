import { makeStyles, Typography } from '@material-ui/core';

interface DescriptionBlockProps {
    title: string;
    desc: string;
}

const useStyles = makeStyles(({ spacing }) => ({
    descriptionBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    descriptionBlockTitle: {
        marginBottom: spacing(2),
    },
}));

export const DescriptionBlock = ({ title, desc }: DescriptionBlockProps) => {
    const classes = useStyles();

    return (
        <div className={classes.descriptionBlock}>
            <Typography className={classes.descriptionBlockTitle}>
                {title}
            </Typography>
            <Typography variant="h4" color="secondary">
                {desc}
            </Typography>
        </div>
    );
};
