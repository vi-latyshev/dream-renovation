import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { Section } from './Section';

import type { SectionProps } from './Section';

export interface SectionWithContainerProps extends SectionProps {
    containerClassName?: string;
}

const useStyles = makeStyles(({ breakpoints, mixins, props }) => ({
    container: {
        ...mixins.flexCenter,
        width: '100%',
        maxWidth: breakpoints.width(props?.MuiContainer?.maxWidth || 'xl'),
    },
}));

export const SectionWithContainer = ({
    containerClassName,
    children,
    ...props
}: SectionWithContainerProps) => {
    const classes = useStyles();

    return (
        <Section maxWidth={false} {...props}>
            <div className={clsx(classes.container, containerClassName)}>
                {children}
            </div>
        </Section>
    );
};
