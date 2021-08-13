import { useHistory } from 'react-router-dom'
import classNames from 'classnames/bind'
import qs from 'query-string'

import styles from './SubmitButton.module.scss'

import { isValidDate, isValidRange } from '../../utils/date'

const cx = classNames.bind(styles)

interface FormValues {
  lastday: string
  nickname: string
}

function SubmitButton({ formValues }: { formValues: FormValues }) {
  const isAllInputed = Object.values(formValues).every(Boolean)
  const history = useHistory()

  const { lastday } = formValues

  const handleSubmit = () => {
    if (!isValidDate(lastday)) {
      alert('마지막 연애 날짜 형식을 확인해주세요')
      return
    }
    if (!isValidRange(lastday)) {
      alert('정상적인 범위의 날짜가 아닙니다.')
      return
    }

    history.push(`/report?${qs.stringify(formValues)}`)
  }

  return (
    <div
      className={cx('btn_submit', { disable: !isAllInputed })}
      onClick={handleSubmit}
    >
      계산하러가기
    </div>
  )
}

export default SubmitButton
