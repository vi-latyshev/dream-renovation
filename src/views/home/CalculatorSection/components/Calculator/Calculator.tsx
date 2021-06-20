import { Typography, makeStyles } from '@material-ui/core';

import { CalculatorFooter } from './CalculatorFooter';

const useStyles = makeStyles(() => ({
    calculator: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

export const Calculator = () => {
    const classes = useStyles();

    return (
        <div className={classes.calculator}>
            <Typography variant="h1">
                Калькулятор ремонта
            </Typography>
            <CalculatorFooter />
        </div>
    );
};
