import { PageBase } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { LivingRoomView } from 'views/services/livingroom';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Гостиная, спальня, детская',
};

const LivingRoomPage = () => (
    <PageBase meta={meta}>
        <ServicesContainer title={meta.title!}>
            <LivingRoomView />
        </ServicesContainer>
    </PageBase>
);

export default LivingRoomPage;
