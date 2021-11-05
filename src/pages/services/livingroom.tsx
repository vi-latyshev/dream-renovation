import { PageBase } from 'components/Page';

import { ServicesContainer } from 'views/services/components';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Гостиная, спальня, детская',
    description: '',
};

const LivingRoom = () => (
    <PageBase meta={meta}>
        <ServicesContainer title={meta.title!}>
            <></>
        </ServicesContainer>
    </PageBase>
);

export default LivingRoom;
