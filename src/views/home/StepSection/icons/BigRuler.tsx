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
        <SvgIcon viewBox="0 0 1534 104" className={clsx(classes.bigRulerIcon, className)} {...props}>
            <rect width="1520" height="90" x="7" y="4" fill="#fff" rx="10" />
            <path d="M39.11 4h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zM60.52 4h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.81 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zM253.2 4h5.35v50h-5.35zm42.81 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0H387v50h-5.35zm42.81 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zM510.1 4h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.81 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.81 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zM767 4h5.35v50H767zm42.82 0h5.35v30h-5.35zm42.81 0h5.35v30h-5.35zm-21.4 0h5.35v50h-5.35zm42.81 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.81 0h5.35v30h-5.35zm-21.4 0h5.35v50h-5.35zm42.81 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.81 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.81 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.81 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35zm42.82 0h5.35v30h-5.35zm42.82 0h5.35v30h-5.35zm-21.41 0h5.35v50h-5.35z" />
        </SvgIcon>
    );
};
