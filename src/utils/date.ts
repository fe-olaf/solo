import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

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
