import { ServicesList } from '../components';

import livingRoomImg from './images/living-room.jpg';
import bedRoomImg from './images/bedroom.jpg';
import childRoomImg from './images/childrens-room.jpg';
import kitchenRoomImg from './images/kitchen-room.jpg';
import corridorRoomImg from './images/corridor-room.jpg';

import type { ServicesItemProps } from '../components';

const rooms: ServicesItemProps[] = [
    {
        title: 'Гостиная',
        img: livingRoomImg,
    },
    {
        title: 'Спальня',
        img: bedRoomImg,
    },
    {
        title: 'Детская',
        img: childRoomImg,
    },
    {
        title: 'Кухня',
        img: kitchenRoomImg,
    },
    {
        title: 'Коридор',
        img: corridorRoomImg,
    },
];

export const RoomList = () => (
    <ServicesList items={rooms} />
);
