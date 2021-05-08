import { Container, ContainerProps, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

export interface SectionProps extends ContainerProps {
    withoutVerticalPadding?: boolean;
}

const useStyles = makeStyles(({ mixins }) => ({
    section: {
        ...mixins.flexCenter,
    },
    verticalPadding: {
        paddingTop: 120,
        paddingBottom: 120,
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
