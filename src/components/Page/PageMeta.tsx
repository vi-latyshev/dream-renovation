import Head from 'next/head';

export interface PageMetaProps {
    title: string;
    description: string;
}

export const PageMeta = ({
    title,
    description,
}: PageMetaProps) => (
    <Head>
        <title>{title}</title>

        {/* Primary */}
        <meta name="description" content={description} />

        {/* other meta */}
    </Head>
);
