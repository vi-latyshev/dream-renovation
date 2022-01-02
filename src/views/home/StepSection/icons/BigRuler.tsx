/* eslint-disable react/jsx-max-props-per-line */
import { makeStyles, SvgIcon } from '@material-ui/core';
import clsx from 'clsx';

import type { SvgIconProps } from '@material-ui/core';

const useStyles = makeStyles({
    bigRulerIcon: {
        filter: 'drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.3))',
    },
});

export const BigRulerIcon = ({ className, ...props }: SvgIconProps) => {
    const classes = useStyles();

    return (
        <SvgIcon viewBox="0 0 1434 104" className={clsx(classes.bigRulerIcon, className)} {...props}>
            <rect width="1420" height="90" x="7" y="4" fill="#fff" rx="10" />
            <path d="M37 4h5v30h-5zm40 0h5v30h-5zM57 4h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5zm40 0h5v30h-5zm40 0h5v30h-5zm-20 0h5v50h-5z" />
        </SvgIcon>
    );
};
