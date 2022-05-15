import { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';

import { useSlider } from 'hooks/useSlider';

import { PhotoMain } from './PhotoMain';
import { PhotosList } from './PhotosList';

import type { SliderOptions } from 'hooks/useSlider';
import type { ExampleWorkPhotos } from '../contants';

interface PhotosSliderProps {
    photos: ExampleWorkPhotos;
    handleEndPhotos: ReturnType<typeof useSlider>['nextStep'];
}

const useStyles = makeStyles({
    photosSliderContainer: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: 560,
    },
});

const sliderSettings: SliderOptions = {
    autoSlide: true,
    trottleDelay: 50,
};

export const PhotosSlider = ({ photos, handleEndPhotos }: PhotosSliderProps) => {
    const classes = useStyles();

    const lastPhotosLength = useRef<ExampleWorkPhotos>(photos);
    const { step, resetStep, setStep } = useSlider(photos.length, sliderSettings);

    useEffect(() => {
        lastPhotosLength.current = photos;
        resetStep(true);
    }, [photos]);

    // fix out of bounds on changing photos by waiting re-render with reset step to 0
    const activeStep = step === 0 || lastPhotosLength.current === photos ? step : 0;

    return (
        <div className={classes.photosSliderContainer}>
            <PhotoMain image={photos[activeStep]} />
            <PhotosList
                photos={photos}
                activeStep={activeStep}
                setStep={setStep}
                handleEndPhotos={handleEndPhotos}
            />
        </div>
    );
};
