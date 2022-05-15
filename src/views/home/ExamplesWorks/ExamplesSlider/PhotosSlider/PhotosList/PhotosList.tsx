import { useCallback, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';

import { PhotoItem } from './PhotoItem';

import type { useSlider } from 'hooks/useSlider';
import type { ExampleWorkPhotos } from '../../contants';

interface PhotosListProps {
    activeStep: number;
    photos: ExampleWorkPhotos;
    handleEndPhotos: ReturnType<typeof useSlider>['nextStep'];
    setStep: ReturnType<typeof useSlider>['setStep'];
}

const useStyles = makeStyles(({ spacing }) => ({
    photoList: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        bottom: spacing(4),
    },
}));

export const PhotosList = ({
    photos,
    activeStep,
    setStep,
    handleEndPhotos,
}: PhotosListProps) => {
    const classes = useStyles();

    const cyclesSteps = useRef<number>(0);

    useEffect(() => {
        cyclesSteps.current = 0;
    }, [photos]);

    // change example works by after some change cycles of photos
    useEffect(() => {
        const maxCycle = photos.length === 1 ? 1 : (photos.length * 2);

        if (cyclesSteps.current <= maxCycle - 1) {
            cyclesSteps.current += 1;

            return;
        }
        handleEndPhotos();
    });

    const handleClickPhotoItem = useCallback((index: number) => () => {
        cyclesSteps.current = index;
        setStep(index, true);
    }, []);

    return (
        <div className={classes.photoList}>
            {photos.map((image, index) => (
                <PhotoItem
                    key={image.src}
                    image={image}
                    isActive={activeStep === index}
                    onClick={handleClickPhotoItem(index)}
                />
            ))}
        </div>
    );
};
