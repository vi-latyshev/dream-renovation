import { Page } from 'components/Page';
import {
    MainSection,
    StepSection,
    PricingSection,
    ServicesSection,
    ContactUsSection,
    CalculatorSection,
    AboutCompanySection,
} from 'views/home';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    description: 'Ремонт мечты',
};

const IndexPage = () => (
    <Page meta={meta}>
        <MainSection />
        <ServicesSection />
        <AboutCompanySection />
        <StepSection />
        <CalculatorSection />
        <PricingSection />
        <ContactUsSection />
    </Page>
);

export default IndexPage;
