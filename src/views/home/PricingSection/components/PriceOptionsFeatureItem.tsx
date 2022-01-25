import { makeStyles, Typography } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';

import { PriceFeatureItemContainer } from './PriceFeatureItemContainer';

interface PriceOptionsFeatureItemProps {
    children: React.ReactNode;
}

const useStyles = makeStyles(({ spacing, typography }) => ({
    icon: {
        marginTop: spacing(1),
        fontSize: '0.5rem',
        marginLeft: spacing(2),
        marginRight: spacing(2),
    },
    text: {
        fontWeight: typography.fontWeightBold,
    },
}));

export const PriceOptionsFeatureItem = ({ children }: PriceOptionsFeatureItemProps) => {
    const classes = useStyles();

    return (
        <PriceFeatureItemContainer>
            <FiberManualRecord color="inherit" className={classes.icon} />
            <Typography className={classes.text}>
                {children}
            </Typography>
        </PriceFeatureItemContainer>
    );
};
