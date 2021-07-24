import { makeStyles } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';
import { Calculator } from './components/Calculator';

const useStyles = makeStyles(({ palette }) => ({
    calculator: {
        paddingBottom: 50,
        borderWidth: '80px 40px',
        borderStyle: 'solid',
        borderColor: palette.secondary.main,
    },
}));

export const CalculatorSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer withoutCenter className={classes.calculator}>
            <Calculator />
        </SectionWithContainer>
    );
};
