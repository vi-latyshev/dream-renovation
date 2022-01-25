import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { LivingRoomView } from 'views/services/livingroom';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Гостиная, спальня, детская',
};

const LivingRoomPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <LivingRoomView />
        </ServicesContainer>
    </Page>
);

export default LivingRoomPage;
