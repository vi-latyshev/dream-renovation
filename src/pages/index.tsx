import { Page } from 'components/Page';
import {
    MainSection,
    StepSection,
    PricingSection,
    ServicesSection,
    ContactUsSection,
    CalculatorSection,
    AboutCompanySection,
    ExamplesWorks,
} from 'views/home';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Качественный ремонт в Москве',
};

const IndexPage = () => (
    <Page meta={meta}>
        <MainSection />
        <ServicesSection />
        <ExamplesWorks />
        <StepSection />
        <CalculatorSection />
        <PricingSection />
        <AboutCompanySection />
        <ContactUsSection />
    </Page>
);

export default IndexPage;
