import { PageBase } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { FloorsView } from 'views/services/floor';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Полы',
    description: '',
};

const FloorsPage = () => (
    <PageBase meta={meta}>
        <ServicesContainer title={meta.title!}>
            <FloorsView />
        </ServicesContainer>
    </PageBase>
);

export default FloorsPage;
