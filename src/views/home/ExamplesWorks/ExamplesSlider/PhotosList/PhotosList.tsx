import Image from 'next/image';
import { makeStyles } from '@material-ui/core';

import { PhotoItem } from './PhotoItem';

import type { ExampleWorkPhotos } from '../contants';

interface PhotosListProps {
    photos: ExampleWorkPhotos;
}

const useStyles = makeStyles(({ spacing }) => ({
    photoContainer: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: 560,
    },
    photo: {
        borderRadius: 5,
    },
    photoList: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        bottom: spacing(4),
    },
}));

export const PhotosList = ({ photos }: PhotosListProps) => {
    const classes = useStyles();

    const step = 0;

    return (
        <div className={classes.photoContainer}>
            <Image
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={photos[0]}
                className={classes.photo}
            />
            <div className={classes.photoList}>
                {photos.map((image, index) => (
                    <PhotoItem
                        key={image.src}
                        image={image}
                        isActive={step === index}
                    />
                ))}
            </div>
        </div>
    );
};
