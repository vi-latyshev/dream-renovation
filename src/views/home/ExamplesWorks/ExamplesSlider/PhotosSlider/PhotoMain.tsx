import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Fade, makeStyles } from '@material-ui/core';

import type { TransitionProps } from '@material-ui/core/transitions';
import type { ExampleWorkPhoto } from '../contants';

interface PhotoMainProps {
    image: ExampleWorkPhoto;
}

const useStyles = makeStyles(() => ({
    photoMainContainer: {
        position: 'relative',
        width: '100%',
    },
    photo: {
        borderRadius: 5,
    },
}));

const timeoutFadePhoto: TransitionProps['timeout'] = {
    enter: 500,
};

export const PhotoMain = ({ image }: PhotoMainProps) => {
    const classes = useStyles();

    const [isPhotoLoaded, setIsPhotoLoaded] = useState<boolean>(false);

    const handlePhotoLoaded = useCallback(() => {
        setIsPhotoLoaded(true);
    }, []);

    useEffect(() => {
        setIsPhotoLoaded(false);
    }, [image]);

    return (
        <Fade
            in={isPhotoLoaded}
            timeout={timeoutFadePhoto}
        >
            <div className={classes.photoMainContainer}>
                <Image
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    src={image}
                    className={classes.photo}
                    onLoadingComplete={handlePhotoLoaded}
                />
            </div>
        </Fade>
    );
};
