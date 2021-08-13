import { useHistory } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './SubmitButton.module.scss'

const cx = classNames.bind(styles)

interface FormValues {
  birthday: string
  lastday: string
  nickname: string
}

function parseDate(date: string) {
  return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
}

function dateValidator(date: string): boolean {
  if (!/^\d{8}$/.test(date) || !new Date(parseDate(date)).valueOf()) {
    return false
  }
  return true
}

function SubmitButton({ formValues }: { formValues: FormValues }) {
  const isAllInputed = Object.values(formValues).every(Boolean)
  const history = useHistory()

  const { birthday, lastday, nickname } = formValues

  const handleSubmit = () => {
    if (!dateValidator(birthday)) {
      alert('생년월일 날짜 형식을 확인해주세요')
      return
    }
    if (!dateValidator(lastday)) {
      alert('마지막 연애 날짜 형식을 확인해주세요')
      return
    }

    history.push(
      `/result?birthday=${birthday}&lastday=${lastday}&nickname=${nickname}`,
    )
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
