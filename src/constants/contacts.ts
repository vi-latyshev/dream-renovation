const workTime = {
    open: '10:00',
    close: '22:00',
};

export const CONTACTS = {
    email: 'remont_me4ti@info.ru',
    tel: '+7 123 456 78 90',
    workTime,
    workTimeString: Object.values(workTime).join(' - '),
};
