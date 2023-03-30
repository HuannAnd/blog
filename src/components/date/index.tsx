import { TimeHTMLAttributes } from 'react';

import { parseISO } from 'date-fns';
import format from 'date-fns/format';


type DateTextProps = {
  dateString: string;
} & TimeHTMLAttributes<HTMLTimeElement>

export default function DateText({ dateString , ...props}: DateTextProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString} {...props}>{format(date, 'LLLL d, yyyy')}</time>
}