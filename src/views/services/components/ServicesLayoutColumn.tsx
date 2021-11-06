import { Container, Grid } from '@material-ui/core';

import { ServicesTypesTitle } from './ServicesTypesTitle';
import { ServicesDescription } from './ServicesDescription';

import type { ServicesDescriptionProps } from './ServicesDescription';

interface ServicesLayoutColumnProps {
    images: React.ReactNode;
    descriptions: ServicesDescriptionProps[];
    withTitleCenter?: boolean;
}

export const ServicesLayoutColumn = ({
    images,
    descriptions,
    withTitleCenter,
}: ServicesLayoutColumnProps) => (
    <>
        <ServicesTypesTitle withCenter={withTitleCenter} />
        <Container>
            <Grid container>
                {descriptions.map(((descr, index) => (
                    <ServicesDescription
                        lg={6}
                        key={descr.title ?? descr.description[0] ?? index}
                        {...descr}
                    />
                )))}
            </Grid>
            {images}
        </Container>
    </>
);
