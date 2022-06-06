import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { PlumbingView } from 'views/services/plumbing';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Сантехника',
    description: 'Ремонт от специалистов своего дела - недорого, с четким соблюдением сметы, работаем по договору и точно в срок! Обновим полностью сантехнику. Ремонт Мечты в Москве или Московской области',
};

const PlumbingPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <PlumbingView />
        </ServicesContainer>
    </Page>
);

export default PlumbingPage;
