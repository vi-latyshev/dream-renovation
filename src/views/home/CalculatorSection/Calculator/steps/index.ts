import { PlaceStep } from './PlaceStep';
import { CountAreaStep } from './CountAreaStep';
import { StyleStep } from './StyleStep';
import { MaterialsStep } from './MaterialsStep';
import { AlreadyDesignStep } from './AlreadyDesignStep';
import { FinishStep } from './FinishStep';

export const stepsComponents = [
    PlaceStep,
    CountAreaStep,
    StyleStep,
    MaterialsStep,
    AlreadyDesignStep,
    FinishStep,
];

// Steps count minus Finish step
export const STEPS_COUNTS = stepsComponents.length - 1;
