import { Container, ContainerProps, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

export interface SectionProps extends ContainerProps {
    withoutVerticalPadding?: boolean;
}

const useStyles = makeStyles(({ mixins, spacing }) => ({
    section: {
        ...mixins.flexCenter,
    },
    verticalPadding: {
        paddingTop: spacing(12),
        paddingBottom: spacing(12),
    },
}));

export const Section = ({
    withoutVerticalPadding,
    className,
    ...props
}: SectionProps) => {
    const classes = useStyles();
    const sectionClass = clsx(classes.section, className, {
        [classes.verticalPadding]: !withoutVerticalPadding,
    });

    return (
        <Container
            component="section"
            className={sectionClass}
            {...props}
        />
    );
};
