import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core';

import { useSlider } from 'hooks/useSlider';

import { PhotoItem } from './PhotoItem';

import type { SliderOptions } from 'hooks/useSlider';
import type { ExampleWorkPhotos } from '../contants';

interface PhotosListProps {
    photos: ExampleWorkPhotos;
    handleEndPhotos: ReturnType<typeof useSlider>['nextStep'];
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

const sliderSettings: SliderOptions = {
    autoSlide: true,
    trottleDelay: 200,
};

export const PhotosList = ({ photos, handleEndPhotos }: PhotosListProps) => {
    const classes = useStyles();

    const lastPhotosLength = useRef<ExampleWorkPhotos>(photos);
    const cyclesSteps = useRef<number>(0);
    const { step, resetStep, setStep } = useSlider(photos.length, sliderSettings);

    useEffect(() => {
        lastPhotosLength.current = photos;
        cyclesSteps.current = 0;
        resetStep(true);
    }, [photos]);

    useEffect(() => {
        const maxCycle = photos.length === 1 ? 1 : (photos.length * 2);

        if (cyclesSteps.current <= maxCycle) {
            cyclesSteps.current += 1;

            return;
        }
        handleEndPhotos();
    });

    const handleClickPhotoItem = useCallback((index: number) => () => {
        cyclesSteps.current = 0;
        setStep(index);
    }, []);

    // fix out of bounds on changing photos by waiting re-render with reset step to 0
    const activeStep = step === 0 || lastPhotosLength.current === photos ? step : 0;

    return (
        <div className={classes.photoContainer}>
            <Image
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={photos[activeStep]}
                className={classes.photo}
            />
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
        </div>
    );
};
