import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'

export function formatDate(date: string) {
  return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
}

export function isValidDate(date: string): boolean {
  if (!/^\d{8}$/.test(date) || !new Date(formatDate(date)).valueOf()) {
    return false
  }
  return true
}

export function totalSoloDaysByLastLoveday(loveday: string) {
  return differenceInCalendarDays(new Date(), new Date(formatDate(loveday)))
}

export function isBeforeToday(date: string) {
  return isBefore(new Date(formatDate(date)), new Date())
}

export function isValidRange(date: string) {
  const targetDate = new Date(formatDate(date))

  return (
    isBefore(targetDate, new Date()) &&
    isAfter(targetDate, new Date('1940-01-01'))
  )
}
