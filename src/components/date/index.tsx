import { PropsWithChildren, ReactNode, TimeHTMLAttributes } from 'react';

import { parseISO, format } from 'date-fns';


type DateProps = {
  dateString: string;
} & TimeHTMLAttributes<HTMLTimeElement>

export default function Date({ dateString , ...props}: DateProps) {
  const date = parseISO(dateString);
  
  return <time dateTime={dateString} {...props}>{format(date, 'LLLL d, yyyy')}</time>
}