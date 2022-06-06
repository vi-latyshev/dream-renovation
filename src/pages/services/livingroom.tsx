import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { LivingRoomView } from 'views/services/livingroom';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Гостиная, спальня, детская',
    description: 'Ремонт от специалистов своего дела - недорого, с четким соблюдением сметы, работаем по договору и точно в срок! Обновим вашу гостинную, спальню или детскую. Ремонт Мечты в Москве или Московской области',
};

const LivingRoomPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <LivingRoomView />
        </ServicesContainer>
    </Page>
);

export default LivingRoomPage;
