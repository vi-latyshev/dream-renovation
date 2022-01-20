import { PageBase } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { BathroomView } from 'views/services/bathroom';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Ванная',
};

const BathroomPage = () => (
    <PageBase meta={meta}>
        <ServicesContainer title={meta.title!}>
            <BathroomView />
        </ServicesContainer>
    </PageBase>
);

export default BathroomPage;
