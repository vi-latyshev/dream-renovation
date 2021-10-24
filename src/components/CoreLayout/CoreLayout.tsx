import Head from 'next/head';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

type LayoutProps = {
    title: string;
    description: string;
    children?: React.ReactNode;
};

export const CoreLayout = ({ title, description, children }: LayoutProps) => (
    <>
        <Head>
            <title>{title}</title>

            {/* Primary */}
            <meta name="description" content={description} />

            {/* other meta */}
        </Head>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
);
