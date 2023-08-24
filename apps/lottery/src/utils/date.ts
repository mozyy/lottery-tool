import dayjs from 'dayjs';

export const formatDate = (date: Parameters<typeof dayjs>[0], template = 'YYYY-MM-DD HH:mm') => dayjs(date).format(template);
