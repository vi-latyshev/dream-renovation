import { makeStyles, Typography } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';

import { PriceFeatureItemContainer } from './PriceFeatureItemContainer';

interface PriceFeatureItemProps {
    children: React.ReactNode;
}

const useStyles = makeStyles(({ spacing }) => ({
    icon: {
        marginLeft: spacing(1),
        marginRight: spacing(1),
    },
}));

export const PriceFeatureItem = ({ children }: PriceFeatureItemProps) => {
    const classes = useStyles();

    return (
        <PriceFeatureItemContainer>
            <CheckRounded color="primary" className={classes.icon} />
            <Typography>
                {children}
            </Typography>
        </PriceFeatureItemContainer>
    );
};
