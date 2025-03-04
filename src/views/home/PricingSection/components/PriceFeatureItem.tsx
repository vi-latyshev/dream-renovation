import { makeStyles, Typography } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';

import { PriceFeatureItemContainer } from './PriceFeatureItemContainer';

interface PriceFeatureItemProps {
    children: React.ReactNode;
}

const useStyles = makeStyles(({ spacing }) => ({
    icon: {
        marginTop: 2,
        marginLeft: spacing(1),
        marginRight: spacing(2),
    },
}));

export const PriceFeatureItem = ({ children }: PriceFeatureItemProps) => {
    const classes = useStyles();

    return (
        <PriceFeatureItemContainer>
            <CheckRounded
                color="primary"
                fontSize="small"
                className={classes.icon}
            />
            <Typography>
                {children}
            </Typography>
        </PriceFeatureItemContainer>
    );
};
