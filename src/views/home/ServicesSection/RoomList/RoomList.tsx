import { ServicesCardList } from '../components';

import livingRoomImg from './images/living-room.jpg';
import bedRoomImg from './images/bedroom.jpg';
import childRoomImg from './images/childrens-room.jpg';
import kitchenRoomImg from './images/kitchen-room.jpg';
import corridorRoomImg from './images/corridor-room.jpg';

import type { ServicesCardProps } from '../components';

const rooms: ServicesCardProps[] = [
    {
        title: 'Гостиная',
        img: livingRoomImg,
        url: '/livingroom',
    },
    {
        title: 'Спальня',
        img: bedRoomImg,
        url: '/livingroom',
    },
    {
        title: 'Детская',
        img: childRoomImg,
        url: '/livingroom',
    },
    {
        title: 'Кухня',
        img: kitchenRoomImg,
        url: '/kitchen',
    },
    {
        title: 'Коридор',
        img: corridorRoomImg,
        url: '/kitchen',
    },
];

export const RoomList = () => (
    <ServicesCardList items={rooms} />
);
