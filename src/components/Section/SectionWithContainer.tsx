import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { Section } from './Section';

import type { SectionProps } from './Section';

export interface SectionWithContainerProps extends SectionProps {
    withoutCenter?: boolean;
    containerClassName?: string;
}

const useStyles = makeStyles(({ breakpoints, mixins, props }) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: breakpoints.values[props?.MuiContainer?.maxWidth || 'lg'],
    },
    center: {
        ...mixins.flexCenter,
    },
}));

export const SectionWithContainer = ({
    withoutCenter,
    containerClassName,
    children,
    ...props
}: SectionWithContainerProps) => {
    const classes = useStyles();

    const containerClass = clsx(classes.container, containerClassName, {
        [classes.center]: !withoutCenter,
    });

    return (
        <Section maxWidth={false} {...props}>
            <div className={containerClass}>
                {children}
            </div>
        </Section>
    );
};
