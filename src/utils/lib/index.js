export { default as APIManager } from './APIManager';
export { default as i18n } from './i18n';

/*  timestamp 날짜형식 변환  */
const timestampDefaultFormat = {
    Y: '.',
    M: '.',
    D: '',
    h: ':',
    m: ':',
    s: '',
};

/** Timstamp to custom format */
export const dateFormatConverter = (
    ts,
    customFormat = null,
    filters = null,
) => {
    let format = { ...timestampDefaultFormat };
    if (customFormat) format = { ...format, ...customFormat };
    const date = new Date(ts);
    let result = {
        Y: date.getFullYear(),
        M:
            date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1,
        D:
            date.getDate() + 1 < 10
                ? `0${date.getDate() + 1}`
                : date.getDate() + 1,
        h:
            date.getHours() + 1 < 10
                ? `0${date.getHours() + 1}`
                : date.getHours() + 1,
        m:
            date.getMinutes() + 1 < 10
                ? `0${date.getMinutes() + 1}`
                : date.getMinutes() + 1,
        s:
            date.getSeconds() + 1 < 10
                ? `0${date.getSeconds() + 1}`
                : date.getSeconds() + 1,
    };

    if (filters) {
        let rr = '';
        for (let i of filters) {
            rr += `${result[i]}${format[i]} `;
        }
        return rr;
    }
    return `${result.Y}${format.Y}${result.M}${format.M}${result.D}${format.D} ${result.h}${format.h}${result.m}${format.m}${result.s}${format.s}`;
};

export const momentDateToString = (value) => {
    const year = value.year();
    const month =
        value.month() + 1 < 10 ? `0${value.month() + 1}` : value.month() + 1;
    const day = value.date() < 10 ? `0${value.date()}` : value.date();

    return `${year}-${month}-${day}`;
};

export const setSession = (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
    if (getSession(key) !== null) {
        return true;
    } else {
        return false;
    }
};

export const getSession = (key) => {
    const session = window.sessionStorage.getItem(key);
    return JSON.parse(session);
};

export const clearSession = () => {
    window.sessionStorage.clear();
};

export const getRandomRGB = () => {
    const num = Math.round(0xffffff * Math.random());

    const r = num >> 16;
    const g = (num >> 8) & 255;
    const b = num & 255;

    return `rgb(${r}, ${g}, ${b})`;
};

export const getDiffBetweenTwoDatesInDays = (date, compareDate) => {
    const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000;

    const diffInMilliseconds =
        new Date(date).getTime() - new Date(compareDate).getTime();
    const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS;

    if (diffInDays < 0) {
        return diffInDays;
    }
};
