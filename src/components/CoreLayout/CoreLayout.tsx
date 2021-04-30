import React, { ReactNode } from 'react';
import Head from 'next/head';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

type Props = {
    title: string;
    description: string;
    children?: ReactNode;
};

export const CoreLayout = ({ title, description, children }: Props) => (
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
