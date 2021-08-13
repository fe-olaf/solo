import React from 'react'

import InputContainer from './InputContainer'

function NameInput({
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
        placeholder="이름을 입력해주세요 (ex. 김말자)"
      />
    </InputContainer>
  )
}

export default NameInput
