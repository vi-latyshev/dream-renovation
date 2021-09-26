import { Grid } from '@material-ui/core';

import type { GridProps } from '@material-ui/core';

interface RadioWrapperProps extends GridProps { }

export const RadioWrapper = ({ spacing = 8, ...props }: RadioWrapperProps) => (
    <Grid
        item
        container
        spacing={spacing}
        {...props}
    />
);
