import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    footer: {},
}));

export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    );
};
