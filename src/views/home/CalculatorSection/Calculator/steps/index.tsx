import dynamic from 'next/dynamic';

import { Loading } from 'components/Loading';

const steps = [
    'PlaceStep',
    'CountAreaStep',
    'StyleStep',
    'MaterialsStep',
    'AlreadyDesignStep',
    'FinishStep',
];

// load every step as dynamic module
export const stepsComponents = steps.map((step, index) => dynamic(
    () => import(`./${step}`),
    { loading: () => <Loading />, ssr: index > 1 },
));

// steps count minus Finish step
export const STEPS_COUNTS = steps.length - 1;
