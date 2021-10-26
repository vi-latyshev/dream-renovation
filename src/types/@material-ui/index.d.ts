import type { Property } from 'csstype';
import type { Theme } from '@mui/material/styles';

/**
 * @TODO remove or change after migration
 */
declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends Theme { }
}

declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        flexCenter: {
            display: Property.Display,
            justifyContent: Property.JustifyContent,
            alignItems: Property.AlignContent,
        };
        flexCenterWrap: {
            display: Property.Display,
            flexWrap: Property.FlexWrap,
            justifyContent: Property.JustifyContent,
            alignItems: Property.AlignContent,
        };
    }
}
