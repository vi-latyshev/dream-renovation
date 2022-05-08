import { useCallback } from 'react';
import {
    Button,
    Typography,
    makeStyles,
    InputAdornment,
} from '@material-ui/core';

import { calculatorDataSchema } from 'lib/api/routes/forms/schemas';
import { defaultCalculateData } from 'lib/calculator/calculator-price';
import { Input, Select, Slider } from 'components/controls';
import { useFormBase } from 'components/controls/hooks';
import { useModal } from 'components/Modal';

import { CalculatorPrice } from './CalculatorPrice';
import { CalculatorContactForm } from './CalculatorContactForm';

import type { InputProps } from 'components/controls';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    grid: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(3, 348px)',
        gridTemplateRows: 'repeat(2, 1fr)',
        justifyContent: 'space-between',
        gap: spacing(3, 10),
        [breakpoints.down('lg')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
        },
    },
    title: {
        marginBottom: spacing(3),
    },
    priceContainer: {
        gridRowStart: 'span 2',
        [breakpoints.down('lg')]: {
            gridRowStart: 'auto',
            gridRowEnd: -1,
            gridColumn: 'span 2',
        },
    },
    areaContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: spacing(2),
    },
    priceNumberContainer: {
        '& > span': {
            whiteSpace: 'nowrap',
        },
    },
    submitButton: {
        marginTop: spacing(5),
    },
}));

const valueLabelSliderFormat = (value: number) => (<>{value} м<sup>2</sup></>);
const squareAreaInpitProps: InputProps<unknown>['InputProps'] = {
    endAdornment: <InputAdornment position="end">м<sup>2</sup></InputAdornment>,
};

export const CalculatorForm = () => {
    const classes = useStyles();
    const { showModal } = useModal();

    const { control, handleSubmit, formState } = useFormBase({
        schema: calculatorDataSchema,
        defaultValues: defaultCalculateData,
    });

    const handleCalculatorForm = useCallback(handleSubmit((calculatorData) => {
        showModal(CalculatorContactForm, {
            calculatorData,
        });
    }), []);

    return (
        <form onSubmit={handleCalculatorForm} className={classes.form}>
            <div className={classes.grid}>
                <div>
                    <Typography variant="h3" className={classes.title}>
                        Где делаем ремонт?
                    </Typography>
                    <Select
                        name="placeRepair"
                        control={control}
                        options={['apartment', 'house', 'office', 'shop']}
                    />
                </div>
                <div>
                    <Typography variant="h3" className={classes.title}>
                        Вид ремонта?
                    </Typography>
                    <Select
                        name="styleRepair"
                        control={control}
                        options={['cosmetic', 'euro', 'design']}
                    />
                </div>
                <div className={classes.priceContainer}>
                    <Typography variant="h3" className={classes.title}>
                        Стоимость:
                    </Typography>
                    <Typography className={classes.priceNumberContainer}>
                        Ваша квартира мечты обойдется вам в{' '}
                        <CalculatorPrice control={control} /> рублей
                    </Typography>
                </div>
                <div>
                    <Typography variant="h3" className={classes.title}>
                        Площадь помещения:
                    </Typography>
                    <Input
                        name="squareArea"
                        control={control}
                        type="number"
                        InputProps={squareAreaInpitProps}
                    />
                </div>
                <div className={classes.areaContainer}>
                    <Slider
                        name="squareArea"
                        control={control}
                        min={40}
                        max={500}
                        valueLabelDisplay="on"
                        valueLabelFormat={valueLabelSliderFormat}
                    />
                </div>

            </div>
            <Button
                type="submit"
                disabled={formState.isSubmitting}
                className={classes.submitButton}
            >
                Связаться с нами
            </Button>
        </form>
    );
};
