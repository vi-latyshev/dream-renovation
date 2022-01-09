import Head from 'next/head';
import { useRouter } from 'next/router';

export interface PageMetaProps {
    title?: string;
    description?: string;
}

const DEFAULT_TITLE = 'Ремонт мечты';
const DEFAULT_DESCRIPTION = 'Ремонт от специалистов своего дела - недорого, с четким соблюдением сметы, работаем по договору и точно в срок! Обновим вашу квартиру, офис или дом. Ремонт Мечты в Москве или Московской области';
const KEYWORDS = ['ремонт мечты', 'недорого', 'качественный', 'ремонт квартир под ключ', 'отделочные работы', 'дизайн', 'наши проекты', 'трехкомнатная', 'сроки', 'дверь', 'дом', 'евроремонт', 'услуги', 'Москва', 'Московская область', 'офис'].join(', ');

const DOMAIN_URL = process.env.DOMAIN;

export const PageMeta = ({
    title,
    description,
}: PageMetaProps) => {
    const { pathname } = useRouter();

    return (
        <Head>
            {/* required */}
            <meta key="charSet" charSet="utf-8" />

            <title>{title ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE}</title>

            {/* Primary */}
            <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
            {/* required meta tags */}
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content={KEYWORDS} />
            <meta name="url" content={`${DOMAIN_URL}${pathname}`} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="ru_RU" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN_URL}${pathname}`} />
            <meta property="og:image" content={`${DOMAIN_URL}/favicon.ico`} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content={`${DOMAIN_URL}${pathname}`} />
            <meta name="twitter:image" content={`${DOMAIN_URL}/favicon.ico`} />

            {/* icons */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
    );
};
