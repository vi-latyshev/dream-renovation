import { makeStyles, Paper, Typography } from '@material-ui/core';

import { Section } from 'components/Section';

import { CalculatorForm } from './CalculatorForm';

export const CALCULATOR_SECTION_ID = 'calculator';

const useStyles = makeStyles(({
    breakpoints, palette, spacing, typography,
}) => ({
    section: {
        padding: spacing(8),
        backgroundColor: palette.primary.main,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingTop: spacing(12),
        paddingBottom: spacing(12),
        borderRadius: 30,
    },
    calculator: {
        position: 'relative',
        maxWidth: '100%',
        // maxWidth: ,
        // margin: spacing(0, 3),
        [breakpoints.up('md')]: {
            width: breakpoints.values.sm,
        },
        [breakpoints.up('lg')]: {
            width: breakpoints.values.md,
        },
        [breakpoints.up('xl')]: {
            width: breakpoints.values.lg,
        },
        [breakpoints.up(breakpoints.values.xl + spacing(8 * 3))]: {
            width: breakpoints.values.xl,
        },
    },
    description: {
        marginTop: spacing(3),
        marginBottom: spacing(3),
        maxWidth: breakpoints.values.sm,
        fontSize: typography.h3.fontSize,
    },
}));

export const CalculatorSection = () => {
    const classes = useStyles();

    return (
        <Section
            maxWidth={false}
            withoutVerticalPadding
            id={CALCULATOR_SECTION_ID}
            className={classes.section}
        >
            <Paper className={classes.container}>
                <div className={classes.calculator}>
                    <Typography variant="h1" component="h2">
                        Калькулятор ремонта
                    </Typography>
                    <Typography className={classes.description}>
                        Расчёт стоимости ремонта. Калькулятор рассчитывает приблизительную стоимость предстоящей работы.
                    </Typography>
                    <CalculatorForm />
                </div>
            </Paper>
        </Section>
    );
};
