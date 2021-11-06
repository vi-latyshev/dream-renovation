import Image from 'next/image';
import { Container, makeStyles } from '@material-ui/core';

import { ServicesDescription, ServicesTypesTitle } from '../components';

import electricityImg from './images/electricity.jpg';

const useStyles = makeStyles(() => ({
    container: {},
}));

const description = [
    'Штробление стен для проведения электропроводки',
    'Проведение электропроводки с гофрой',
    'Установка щитка с автоматами и узо',
    'Подключение розеток',
];

export const ElectricityView = () => {
    const classes = useStyles();

    return (
        <>
            <ServicesTypesTitle />
            <Container>
                <ServicesDescription description={description} />
                <Image
                    width={1128}
                    height={407}
                    alt="Электрика"
                    objectFit="cover"
                    src={electricityImg}
                />
            </Container>
        </>
    );
};
