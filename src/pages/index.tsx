import { Page } from 'components/Page';
import {
    MainSection,
    StepSection,
    PricingSection,
    ServicesSection,
    ContactUsSection,
    AboutCompanySection,
} from 'views/home';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Качественный ремонт в Москве',
};

const IndexPage = () => (
    <Page meta={meta}>
        <MainSection />
        <ServicesSection />
        <StepSection />
        <PricingSection />
        <AboutCompanySection />
        <ContactUsSection />
    </Page>
);

export default IndexPage;
