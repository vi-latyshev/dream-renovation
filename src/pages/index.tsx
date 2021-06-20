import { CoreLayout } from 'components/CoreLayout';
import {
    MainSection,
    ContactUsSection,
    AboutCompanySection,
    CalculatorSection,
} from 'views/home';

const TITLE = 'Ремонт мечты';
const DESCRIPTION = 'Ремонт мечты';

const IndexPage = () => (
    <CoreLayout title={TITLE} description={DESCRIPTION}>
        <MainSection />
        <AboutCompanySection />
        <CalculatorSection />
        <ContactUsSection />
    </CoreLayout>
);

export default IndexPage;
