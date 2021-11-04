import Image from 'next/image';
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
} from '@material-ui/core';

export interface ServicesItemProps {
    title: string;
    img: StaticImageData;
    // url: string;
}

const useStyles = makeStyles(() => ({
    paper: {
        padding: 24,
        cursor: 'pointer',
    },
    title: {
        marginBottom: 20,
    },
}));

export const ServicesItem = ({ title, img }: ServicesItemProps) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Paper className={classes.paper}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
                <Image
                    src={img}
                    alt={title}
                    width={180}
                    height={165}
                    objectFit="cover"
                />
            </Paper>
        </Grid>
    );
};
