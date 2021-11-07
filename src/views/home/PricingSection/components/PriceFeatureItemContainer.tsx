import { makeStyles } from '@material-ui/core';

interface PriceFeatureItemContainerProps {
    children: React.ReactNode;
}

const useStyles = makeStyles(({ spacing }) => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: spacing(2, 0),
        textAlign: 'left',
    },
}));

export const PriceFeatureItemContainer = ({ children }: PriceFeatureItemContainerProps) => {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            {children}
        </div>
    );
};
