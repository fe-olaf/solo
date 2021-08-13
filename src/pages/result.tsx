import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import qs from 'query-string'

import { isValidDate, totalSoloDaysByLastLoveday } from '../utils/date'
import Heading from '../components/result/Heading'
import Contents from '../components/result/Contents'
import ShareButton from '../components/result/ShareButton'

function ResultPage() {
  const history = useHistory()

  const { lastday, nickname } = qs.parse(window.location.search) as {
    lastday: string
    nickname: string
  }

  useEffect(() => {
    if (!lastday || !nickname || !isValidDate(lastday)) {
      alert('잘못된 접근입니다.')
      history.replace('/')
    }
  }, [history, lastday, nickname])

  const soloDays = totalSoloDaysByLastLoveday(lastday)

  return (
    <div>
      <Heading soloDays={soloDays} />
      <Contents nickname={nickname} soloDays={soloDays} />
      <ShareButton nickname={nickname} />
    </div>
  )
}

export default ResultPage
