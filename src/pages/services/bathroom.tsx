import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { BathroomView } from 'views/services/bathroom';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Ванная',
};

const BathroomPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <BathroomView />
        </ServicesContainer>
    </Page>
);

export default BathroomPage;
