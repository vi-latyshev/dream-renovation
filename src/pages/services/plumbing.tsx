import { PageBase } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { PlumbingView } from 'views/services/plumbing';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Сантехника',
};

const PlumbingPage = () => (
    <PageBase meta={meta}>
        <ServicesContainer title={meta.title!}>
            <PlumbingView />
        </ServicesContainer>
    </PageBase>
);

export default PlumbingPage;
