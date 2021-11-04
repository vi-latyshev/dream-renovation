import { makeStyles, Typography } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';
import { FeaturesList } from './FeaturesList';

import { RoomList } from './RoomList';

export const SERVICES_SECTION_ID = 'services';

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 60,
    },
}));

export const ServicesSection = () => {
    const classes = useStyles();

    return (
        <SectionWithContainer
            maxWidth="xl"
            id={SERVICES_SECTION_ID}
        >
            <Typography variant="h1" className={classes.title}>
                Наши услуги
            </Typography>
            <Typography variant="h3">
                Какую комнату нужно преобразить?
            </Typography>
            <RoomList />
            <Typography variant="h3">
                Определённые типы работ
            </Typography>
            <FeaturesList />
        </SectionWithContainer>
    );
};
