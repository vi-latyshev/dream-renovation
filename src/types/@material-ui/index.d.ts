import type { Property } from 'csstype';

declare module '@material-ui/core/styles/createMixins' {
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
