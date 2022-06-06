import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { FloorsView } from 'views/services/floor';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Полы',
    description: 'Ремонт от специалистов своего дела - недорого, с четким соблюдением сметы, работаем по договору и точно в срок! Обновим ваши полы. Ремонт Мечты в Москве или Московской области',
};

const FloorsPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <FloorsView />
        </ServicesContainer>
    </Page>
);

export default FloorsPage;
