import Link from 'next/link';

import { CoreLayout } from 'components/CoreLayout/CoreLayout';

const TITLE = '';
const DESCRIPTION = '';

const IndexPage = () => (
    <CoreLayout title={TITLE} description={DESCRIPTION}>
        <h1>Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </CoreLayout>
);

export default IndexPage;
