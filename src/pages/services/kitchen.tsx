import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { KitchenView } from 'views/services/kitchen';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Кухня, коридор',
    description: 'Ремонт от специалистов своего дела - недорого, с четким соблюдением сметы, работаем по договору и точно в срок! Обновим вашу кухню. Ремонт Мечты в Москве или Московской области',
};

const KitchenPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <KitchenView />
        </ServicesContainer>
    </Page>
);

export default KitchenPage;
