import { CoreLayout } from 'components/CoreLayout';
import { ContactUsSection } from 'views/home';

const TITLE = 'Ремонт мечты';
const DESCRIPTION = 'Ремонт мечты';

const IndexPage = () => (
    <CoreLayout title={TITLE} description={DESCRIPTION}>
        <ContactUsSection />
    </CoreLayout>
);

export default IndexPage;
