import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { ElectricityView } from 'views/services/electricity';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Электрика',
    description: 'Ремонт от специалистов своего дела - недорого, с четким соблюдением сметы, работаем по договору и точно в срок! Обновим полностью электросистему. Ремонт Мечты в Москве или Московской области',
};

const ElectricityPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <ElectricityView />
        </ServicesContainer>
    </Page>
);

export default ElectricityPage;
