import dayjs from 'dayjs';

export function getHumanDate(date: string): string {
  return dayjs(date).format('MMMM DD, YYYY');
}
