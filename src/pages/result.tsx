import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import qs from 'query-string'

import {
  isValidDate,
  totalDaysByBirtyday,
  totalSoloDaysByLastLoveday,
} from '../utils/date'
import Heading from '../components/result/Heading'
import Contents from '../components/result/Contents'
import ShareButton from '../components/result/ShareButton'

function ResultPage() {
  const history = useHistory()

  const { birthday, lastday, nickname } = qs.parse(window.location.search) as {
    birthday: string
    lastday: string
    nickname: string
  }

  useEffect(() => {
    if (
      !birthday ||
      !lastday ||
      !nickname ||
      !isValidDate(birthday) ||
      !isValidDate(lastday)
    ) {
      alert('잘못된 접근입니다.')
      history.replace('/')
    }
  }, [history, birthday, lastday, nickname])

  const totalDays = totalDaysByBirtyday(birthday)
  const soloDays = totalSoloDaysByLastLoveday(lastday)

  return (
    <div>
      <Heading totalDays={totalDays} soloDays={soloDays} />
      <Contents nickname={nickname} soloDays={soloDays} />
      <ShareButton nickname={nickname} />
    </div>
  )
}

export default ResultPage
