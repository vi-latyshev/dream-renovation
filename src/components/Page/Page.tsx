import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { PageBase } from './PageBase';

import type { PageBaseProps } from './PageBase';

interface PageProps extends PageBaseProps { }

export const Page = ({ meta, children }: PageProps) => (
    <PageBase meta={meta}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </PageBase>
);
