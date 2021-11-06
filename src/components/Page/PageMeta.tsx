import Head from 'next/head';

export interface PageMetaProps {
    title?: string;
    description: string;
}

const DEFAULT_TITLE = 'Ремонт мечты';

export const PageMeta = ({
    title,
    description,
}: PageMetaProps) => (
    <Head>
        <title>{title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE}</title>

        {/* Primary */}
        <meta name="description" content={description} />

        {/* other meta */}
    </Head>
);
