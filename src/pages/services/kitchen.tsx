import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { KitchenView } from 'views/services/kitchen';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Кухня, коридор',
};

const KitchenPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <KitchenView />
        </ServicesContainer>
    </Page>
);

export default KitchenPage;
