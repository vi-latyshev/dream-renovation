import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { FloorsView } from 'views/services/floor';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Полы',
};

const FloorsPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <FloorsView />
        </ServicesContainer>
    </Page>
);

export default FloorsPage;
