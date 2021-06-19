import { forwardRef } from 'react';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MaterialLink, LinkProps as MaterialLinkProps } from '@material-ui/core';
import clsx from 'clsx';

export type LinkProps = {
    href: NextLinkProps['href'],
    as?: NextLinkProps['as'],
    activeClassName?: string;
} & NextLinkProps & Omit<MaterialLinkProps, 'href'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
    href,
    as: linkAs,
    className: classNameProps,
    activeClassName = 'active',
    ...props
}, ref) => {
    const router = useRouter();

    let pathname: string | null | undefined;
    let hrefLink: string | null | undefined;

    if (typeof href === 'string') {
        pathname = href;
        hrefLink = href;
    } else {
        pathname = href.pathname;
        hrefLink = href.href;
    }

    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    const isExternal = hrefLink && (/^(http|mailto:|tel:)/.test(hrefLink));

    if (isExternal) {
        return (
            <MaterialLink
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
                href={href as string}
                className={className}
                {...props}
            />
        );
    }

    return (
        <NextLink
            passHref
            href={href}
            as={linkAs}
        >
            <MaterialLink
                ref={ref}
                href={href as string}
                className={className}
                {...props}
            />
        </NextLink>
    );
});
