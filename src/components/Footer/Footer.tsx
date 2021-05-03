import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        display: 'flex',
        paddingTop: 50,
        paddingBottom: 50,
    },
});

export const Footer = () => {
    const classes = useStyles();
    return (
        <Container component="footer" className={classes.footer}>
            <hr />
        </Container>
    );
};
