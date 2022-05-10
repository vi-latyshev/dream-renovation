import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

interface FormAcceptPolicyProps {
    children?: string;
    className?: string;
}

const useStyles = makeStyles(({ spacing }) => ({
    policyNote: {
        position: 'absolute',
        bottom: spacing(-7),
    },
}));

export const FormAcceptPolicy = ({
    className,
    children = 'Связаться с нами',
}: FormAcceptPolicyProps) => {
    const classes = useStyles();

    return (
        <Typography className={clsx(classes.policyNote, className)}>
            Нажимая кнопку &quot;{children}&quot; вы соглашаетесь на обработку ваших персональных данных
        </Typography>
    );
};
