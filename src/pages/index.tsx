import { Page } from 'components/Page';
import {
    MainSection,
    ContactUsSection,
    AboutCompanySection,
    CalculatorSection,
} from 'views/home';

import type { PageMetaProps } from 'components/Page';

const meta: PageMetaProps = {
    title: 'Ремонт мечты',
    description: 'Ремонт мечты',
};

const IndexPage = () => (
    <Page meta={meta}>
        <MainSection />
        <AboutCompanySection />
        <CalculatorSection />
        <ContactUsSection />
    </Page>
);

export default IndexPage;
