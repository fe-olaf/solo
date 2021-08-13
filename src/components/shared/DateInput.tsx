import React from 'react'
import classNames from 'classnames/bind'

import InputContainer from './InputContainer'

import styles from './DateInput.module.scss'

const cx = classNames.bind(styles)

function DateInput({
  label,
  onChange,
  value,
  name,
}: {
  name: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}) {
  return (
    <InputContainer label={label}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={cx('date_input')}
        placeholder="날짜를 입력해주세요 (ex. 19930710)"
      />
    </InputContainer>
  )
}

export default DateInput
