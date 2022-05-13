import { Typography } from '@material-ui/core';

import { SectionWithContainer } from 'components/Section';

import { ExamplesSlider } from './ExamplesSlider';

export const EXAMPLES_WORKS_ID = 'examples_works';

export const ExamplesWorks = () => (
    <SectionWithContainer id={EXAMPLES_WORKS_ID}>
        <Typography variant="h1" component="h2">
            Примеры наших работ
        </Typography>
        <ExamplesSlider />
    </SectionWithContainer>
);
