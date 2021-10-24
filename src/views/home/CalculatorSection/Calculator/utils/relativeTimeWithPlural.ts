const thresholds = [
    { l: 'dd', r: 60, d: 'day' },
    { l: 'MM', r: 24, d: 'month' },
    { l: 'yy', d: 'year' },
];

const relativeTimeOptions = {
    rounding: (num: number) => Math.round(num * 10) / 10,
    thresholds,
};

export const relativeTimeWithPlural = async (number: number) => {
    const dayjs = (await import('dayjs')).default;
    const relativeTimePlugin = (await import('dayjs/plugin/relativeTime')).default;
    const durationPluging = (await import('dayjs/plugin/duration')).default;
    await import('dayjs/locale/ru');

    dayjs.locale('ru');

    dayjs.extend(relativeTimePlugin, relativeTimeOptions);
    dayjs.extend(durationPluging);

    const dataNow = dayjs();
    const dataEnd = dataNow.add(number, 'day');

    const days = dataEnd.diff(dataNow, 'days', true);

    return dayjs.duration(days, 'days').humanize();
};
