import { PageBase } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { ElectricityView } from 'views/services/electricity';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Электрика',
    description: '',
};

const ElectricityPage = () => (
    <PageBase meta={meta}>
        <ServicesContainer title={meta.title!}>
            <ElectricityView />
        </ServicesContainer>
    </PageBase>
);

export default ElectricityPage;
