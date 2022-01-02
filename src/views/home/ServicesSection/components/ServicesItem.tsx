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

const useStyles = makeStyles(({ spacing }) => ({
    paper: {
        padding: spacing(2),
    },
    title: {
        marginBottom: spacing(2),
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
                        width={200}
                        height={177}
                        objectFit="cover"
                        placeholder="blur"
                    />
                </Paper>
            </Link>
        </Grid>
    );
};
