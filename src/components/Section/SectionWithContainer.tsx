import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { theme } from 'styles';

import { Section } from './Section';

import type { SectionProps } from './Section';

interface SectionWithContainerStyle extends Pick<SectionProps, 'maxWidth'> { }

export interface SectionWithContainerProps extends SectionProps {
    withoutCenter?: boolean;
    containerClassName?: string;
}

const useStyles = makeStyles<typeof theme, SectionWithContainerStyle>(({ breakpoints, mixins, props }) => ({
    container: ({ maxWidth }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: breakpoints.values[typeof maxWidth === 'string' ? maxWidth : (props?.MuiContainer?.maxWidth || 'lg')],
    }),
    center: {
        ...mixins.flexCenter,
    },
}));

export const SectionWithContainer = ({
    withoutCenter,
    containerClassName,
    children,
    maxWidth,
    ...props
}: SectionWithContainerProps) => {
    const classes = useStyles({ maxWidth });

    const containerClass = clsx(classes.container, containerClassName, {
        [classes.center]: !withoutCenter,
    });

    return (
        <Section maxWidth={maxWidth ?? false} {...props}>
            <div className={containerClass}>
                {children}
            </div>
        </Section>
    );
};
