import classNames from 'classnames/bind'
import React from 'react'

import styles from './InputContainer.module.scss'

const cx = classNames.bind(styles)

function InputContainer({
  label,
  children,
}: React.PropsWithChildren<{ label: string }>) {
  return (
    <div className={cx('wrap_input')}>
      <div>{label}</div>
      <div>{children}</div>
    </div>
  )
}

export default InputContainer
