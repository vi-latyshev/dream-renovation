import { PageMeta } from './PageMeta';

import type { PageMetaProps } from './PageMeta';

export interface PageBaseProps {
    meta: PageMetaProps;
    children: React.ReactNode;
}

export const PageBase = ({ meta, children }: PageBaseProps) => (
    <>
        <PageMeta {...meta} />
        {children}
    </>
);
