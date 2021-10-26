import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

interface LoadingProps {
    withoutCenter?: boolean;
}

const useStyles = makeStyles(({ palette, mixins }) => ({
    center: {
        ...mixins.flexCenter,
        height: '100%',
        width: '100%',
    },
    loading: {
        display: 'inline-block',
        position: 'relative',
        width: 80,
        height: 80,
        '& div': {
            position: 'absolute',
            border: `4px solid ${palette.primary.main}`,
            opacity: 1,
            borderRadius: '50%',
            animation: '$ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
            '&:nth-child(2)': {
                animationDelay: -500,
            },
        },
    },
    '@keyframes ripple': {
        '0%': {
            top: 36,
            left: 36,
            width: 0,
            height: 0,
            opacity: 1,
        },
        '100%': {
            top: 0,
            left: 0,
            width: 72,
            height: 72,
            opacity: 0,
        },
    },
}));

export const Loading = ({ withoutCenter }: LoadingProps) => {
    const classes = useStyles();

    const containerClassName = clsx({
        [classes.center]: !withoutCenter,
    });

    return (
        <div className={containerClassName}>
            <div className={classes.loading}>
                <div />
                <div />
            </div>
        </div>
    );
};
