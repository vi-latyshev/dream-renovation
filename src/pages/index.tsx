import { CoreLayout } from 'components/CoreLayout';
import { ContactUsSection } from 'views/home';

const TITLE = '';
const DESCRIPTION = '';

const IndexPage = () => (
    <CoreLayout title={TITLE} description={DESCRIPTION}>
        <ContactUsSection />
    </CoreLayout>
);

export default IndexPage;
