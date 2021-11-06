import { Container } from '@material-ui/core';

import { ServicesTypesTitle } from './ServicesTypesTitle';
import { ServicesDescription } from './ServicesDescription';

import type { ServicesDescriptionProps } from './ServicesDescription';

interface ServicesLayoutColumnProps {
    images: React.ReactNode;
    description: ServicesDescriptionProps;
}

export const ServicesLayoutColumn = ({ images, description }: ServicesLayoutColumnProps) => (
    <>
        <ServicesTypesTitle />
        <Container>
            <ServicesDescription {...description} />
            {images}
        </Container>
    </>
);
