import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { BathroomView } from 'views/services/bathroom';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Ванная',
    description: 'Ремонт от специалистов своего дела - недорого, с четким соблюдением сметы, работаем по договору и точно в срок! Обновим вашу ванну. Ремонт Мечты в Москве или Московской области',
};

const BathroomPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <BathroomView />
        </ServicesContainer>
    </Page>
);

export default BathroomPage;
