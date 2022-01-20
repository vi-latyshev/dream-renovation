import { PageBase } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { KitchenView } from 'views/services/kitchen';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Кухня, коридор',
};

const KitchenPage = () => (
    <PageBase meta={meta}>
        <ServicesContainer title={meta.title!}>
            <KitchenView />
        </ServicesContainer>
    </PageBase>
);

export default KitchenPage;
