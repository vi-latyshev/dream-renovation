import { CoreLayout } from 'components/CoreLayout';
import { Link } from 'components/controls';

const TITLE = '';
const DESCRIPTION = '';

const IndexPage = () => (
    <CoreLayout title={TITLE} description={DESCRIPTION}>
        <h1>Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                About
            </Link>
        </p>
    </CoreLayout>
);

export default IndexPage;
