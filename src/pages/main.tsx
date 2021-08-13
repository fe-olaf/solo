import React, { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Main.module.scss'

import DateInput from '../components/shared/DateInput'

const cx = classNames.bind(styles)

const MAX_DATE_LENGTH = 8

function MainPage() {
  const [formValues, setFormValues] = useState({
    birthday: '',
    lastday: '',
    nickname: '',
  })

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_DATE_LENGTH) {
      alert('날짜는 최대 8 글자까지 입력 할 수 있습니다.')
      return
    }

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const { birthday, lastday } = formValues

  return (
    <div className={cx('wrap_page')}>
      <DateInput
        label="생년월일"
        name="birthday"
        value={birthday}
        onChange={handleDate}
      />
      <DateInput
        label="마지막 연애"
        name="lastday"
        value={lastday}
        onChange={handleDate}
      />
    </div>
  )
}

export default MainPage
