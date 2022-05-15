import Image from 'next/image';
import { ButtonBase, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import type { ExampleWorkPhoto } from '../../contants';

interface PhotoItemProps {
    image: ExampleWorkPhoto;
    isActive: boolean;
    onClick: () => void;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
    photoItem: {
        display: 'flex',
        border: `3px solid ${palette.background.default}`,
        borderRadius: 5,
        '&:not(:first-child)': {
            marginLeft: spacing(3),
        },
    },
    isActive: {
        borderColor: palette.primary.main,
    },
}));

export const PhotoItem = ({ image, isActive, onClick }: PhotoItemProps) => {
    const classes = useStyles();

    const photoItemStyle = clsx(classes.photoItem, {
        [classes.isActive]: isActive,
    });

    return (
        <ButtonBase onClick={onClick} className={photoItemStyle}>
            <Image
                width={200}
                height={100}
                layout="fixed"
                objectFit="cover"
                placeholder="blur"
                src={image}
            />
        </ButtonBase>
    );
};
