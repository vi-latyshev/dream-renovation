import { PlaceStep } from './PlaceStep';
import { CountAreaStep } from './CountAreaStep';
import { FinishStep } from './FinishStep';

export const stepsComponents = [
    PlaceStep,
    CountAreaStep,
    FinishStep,
];

// Steps count minus Finish step
export const STEPS_COUNTS = stepsComponents.length - 1;
