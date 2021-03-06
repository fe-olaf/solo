import classNames from 'classnames/bind'

import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

function generateHeadingTitle(soloDays: number, isMossol?: boolean) {
  if (isMossol) {
    return (
      <>
        <div className={cx('txt_rank')}>π₯</div>
        <h1 className={cx('txt_label')}>λͺ¨νμλ‘</h1>
      </>
    )
  }

  if (soloDays <= 100) {
    return (
      <>
        <div className={cx('txt_rank')}>πΌ</div>
        <h1 className={cx('txt_label')}>μ΄μ  μμμ΄μ</h1>
      </>
    )
  }
  if (soloDays <= 365) {
    return (
      <>
        <div className={cx('txt_rank')}>π₯</div>
        <h1 className={cx('txt_label')}>κ³ μμ΄λ§μ</h1>
      </>
    )
  }
  if (soloDays <= 1095) {
    return (
      <>
        <div className={cx('txt_rank')}>π₯</div>
        <h1 className={cx('txt_label')}>κΉλ§λμ</h1>
      </>
    )
  }

  return (
    <>
      <div className={cx('txt_rank')}>π₯</div>
      <h1 className={cx('txt_label')}>κ³§ λλνμ</h1>
    </>
  )
}

function Heading({
  soloDays,
  isMossol,
}: {
  soloDays: number
  isMossol?: boolean
}) {
  return (
    <div className={cx('article')}>
      {generateHeadingTitle(soloDays, isMossol)}
    </div>
  )
}

export default Heading
