import React, { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Main.module.scss'

import NameInput from '../components/main/NameInput'
import DateInput from '../components/main/DateInput'
import SubmitButton from '../components/main/SubmitButton'

const cx = classNames.bind(styles)

const MAX_DATE_LENGTH = 8

function MainPage() {
  const [formValues, setFormValues] = useState({
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

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      nickname: e.target.value,
    })
  }

  const { lastday, nickname } = formValues

  return (
    <div className={cx('wrap_page')}>
      <h1 className={cx('txt_heading')}>{`솔로\n계산기`}</h1>
      <NameInput
        label="이름"
        name="nickname"
        value={nickname}
        onChange={handleName}
      />
      <DateInput
        label="마지막 연애"
        name="lastday"
        value={lastday}
        onChange={handleDate}
      />
      <SubmitButton formValues={formValues} />
    </div>
  )
}

export default MainPage
