import { ServicesList } from '../components';
import type { ServicesItemProps } from '../components';

import livingRoom from '../images/living-room.jpg';
import bedRoom from '../images/bedroom.jpg';
import childRoom from '../images/childrens-room.jpg';
import kitchenRoom from '../images/kitchen-room.jpg';
import corridorRoom from '../images/corridor-room.jpg';

const rooms: ServicesItemProps[] = [
    {
        title: 'Гостиная',
        img: livingRoom,
    },
    {
        title: 'Спальня',
        img: bedRoom,
    },
    {
        title: 'Детская',
        img: childRoom,
    },
    {
        title: 'Кухня',
        img: kitchenRoom,
    },
    {
        title: 'Коридор',
        img: corridorRoom,
    },
];

export const RoomList = () => (
    <ServicesList items={rooms} />
);
