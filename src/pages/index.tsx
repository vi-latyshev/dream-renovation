import { Page } from 'components/Page';
import {
    MainSection,
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
        <CalculatorSection />
        <ContactUsSection />
    </Page>
);

export default IndexPage;
