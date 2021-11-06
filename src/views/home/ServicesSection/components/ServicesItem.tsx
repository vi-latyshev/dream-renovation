import Image from 'next/image';
import {
    Grid,
    Paper,
    Typography,
    makeStyles,
} from '@material-ui/core';

import { Link } from 'components/controls';

export interface ServicesCardProps {
    title: string;
    img: StaticImageData;
    url: string;
}

const useStyles = makeStyles(() => ({
    paper: {
        padding: 24,
    },
    title: {
        marginBottom: 20,
    },
}));

export const ServicesCard = ({ title, img, url }: ServicesCardProps) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Link href={`/services${url}`}>
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
            </Link>
        </Grid>
    );
};
