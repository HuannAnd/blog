import { TimeHTMLAttributes } from 'react';

import { parseISO , format } from 'date-fns';


type DateTextProps = {
  dateString: string;
} & TimeHTMLAttributes<HTMLTimeElement>

export default function DateText({ dateString , ...props}: DateTextProps) {
  const date = new Date(dateString);
  console.log(date);
  
  
  return <time dateTime={dateString} {...props}>{format(date, 'LLLL d, yyyy')}</time>
}