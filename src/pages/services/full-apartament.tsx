import { Page } from 'components/Page';

import { ServicesContainer } from 'views/services/components';
import { FullApartamentView } from 'views/services/full_apartament';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Квартира целиком',
};

const FullApartamentPage = () => (
    <Page meta={meta}>
        <ServicesContainer title={meta.title!}>
            <FullApartamentView />
        </ServicesContainer>
    </Page>
);

export default FullApartamentPage;
