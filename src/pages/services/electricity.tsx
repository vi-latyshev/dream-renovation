import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { ElectricityView } from 'views/services/electricity';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Электрика',
};

const ElectricityPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <ElectricityView />
        </ServicesContainer>
    </Page>
);

export default ElectricityPage;
