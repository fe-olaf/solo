import React from 'react'

import InputContainer from './InputContainer'

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
        placeholder="날짜를 입력해주세요 (ex. 20210320)"
      />
    </InputContainer>
  )
}

export default DateInput
